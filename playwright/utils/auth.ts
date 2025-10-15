import { BasicApiService } from '@api/basics';
import { request } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const REFRESH_TOKEN_KEY = 'ts.session.refreshToken';
const ACCESS_TOKEN_KEY = 'ts.session.accessToken';

const cookieConfig = {
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Strict' as const,
  path: '/',
};

export const getStorageState = async (permission: 'user' | 'admin'): Promise<string> => {
  const tempDir = path.join(__dirname, '../.auth');
  const storageStatePath = path.join(tempDir, `${permission}.json`);

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  if (!fs.existsSync(storageStatePath)) {
    const apiRequestContext = await request.newContext({
      baseURL: process.env.BASE_URL!,
    });

    const basicApiService = new BasicApiService(apiRequestContext);
    //TODO: add separate credentials for user and admin
    const email =
      permission === 'admin' ? process.env.E2E_USER_EMAIL! : process.env.E2E_USER_EMAIL!;
    const password =
      permission === 'admin' ? process.env.E2E_USER_PASSWORD! : process.env.E2E_USER_PASSWORD!;

    try {
      const response = await basicApiService.logInUserViaApi({ email, password });
      console.log(response);

      if (response.data.login.errors?.length) {
        throw new Error(response.data.login.errors[0].message);
      }

      const storageState = await apiRequestContext.storageState();
      const domain = new URL(process.env.BASE_URL!).hostname;
      const expires = Math.floor(Date.now() / 1000) + 86400; // 1 day from now

      // Set both tokens as properly configured cookies
      storageState.cookies.push(
        {
          name: ACCESS_TOKEN_KEY,
          value: response.data.login.accessToken,
          domain,
          path: cookieConfig.path,
          expires,
          httpOnly: false,
          secure: cookieConfig.secure,
          sameSite: cookieConfig.sameSite,
        },
        {
          name: REFRESH_TOKEN_KEY,
          value: response.data.login.refreshToken,
          domain,
          path: cookieConfig.path,
          expires,
          httpOnly: true, // Refresh token should typically be httpOnly
          secure: cookieConfig.secure,
          sameSite: cookieConfig.sameSite,
        }
      );

      fs.writeFileSync(storageStatePath, JSON.stringify(storageState, null, 2));
    } catch (error: unknown) {
      console.error('Error during authentication:', error);

      await apiRequestContext.dispose();

      if (error instanceof Error) {
        throw new Error(`Authentication failed for ${permission}: ${error.message}`);
      }
      throw new Error('Unknown authentication error occurred');
    }

    await apiRequestContext.dispose();
  }

  return storageStatePath;
};
