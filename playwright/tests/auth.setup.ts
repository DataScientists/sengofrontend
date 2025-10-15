import { BasicApiService } from '@api/basics';
import { APIRequestContext, test as setup } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const domain = new URL(process.env.BASE_URL!).hostname;

setup.describe.configure({ mode: 'serial' });

const REFRESH_TOKEN_KEY = 'ts.session.refreshToken';
const ACCESS_TOKEN_KEY = 'ts.session.accessToken';

const cookieConfig = {
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Strict' as const,
  path: '/',
};

const authenticateAndSaveState = async (
  request: APIRequestContext,
  email: string,
  password: string,
  filePath: string
) => {
  const basicApiService = new BasicApiService(request);

  const response = await basicApiService.logInUserViaApi({ email, password });

  if (response.data.login.errors?.length) {
    throw new Error(`Authentication failed: ${response.data.login.errors[0].message}`);
  }

  const storageState = await request.storageState();

  // Set expiration to 1 day from now (in seconds since Unix epoch)
  const expires = Math.floor(Date.now() / 1000) + 86400;

  // Add tokens as cookies with all required properties
  storageState.cookies = [
    {
      name: ACCESS_TOKEN_KEY,
      value: response.data.login.accessToken,
      domain,
      path: cookieConfig.path,
      expires, // Required
      httpOnly: false, // Default to false unless you need httpOnly
      secure: cookieConfig.secure,
      sameSite: cookieConfig.sameSite,
    },
    {
      name: REFRESH_TOKEN_KEY,
      value: response.data.login.refreshToken,
      domain,
      path: cookieConfig.path,
      expires, // Required
      httpOnly: true, // Typically refresh tokens should be httpOnly
      secure: cookieConfig.secure,
      sameSite: cookieConfig.sameSite,
    },
  ];
  fs.writeFileSync(filePath, JSON.stringify(storageState, null, 2));
};
const authSetup = async (
  request: APIRequestContext,
  email: string,
  password: string,
  fileName: string
) => {
  const tempDir = path.join(__dirname, '../.auth');

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  const tempFilePath = path.join(tempDir, fileName);

  if (!fs.existsSync(tempFilePath)) {
    await authenticateAndSaveState(request, email, password, tempFilePath);
  }
};

setup('Authenticate as admin via API', async ({ request }) => {
  await authSetup(
    request,
    process.env.E2E_USER_EMAIL!,
    process.env.E2E_USER_PASSWORD!,
    'admin.json'
  );
});
