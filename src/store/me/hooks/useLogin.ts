import { useAuthService } from '@service/auth';
import { useAuthContext } from '@shared/auth';
import { useCallback } from 'react';

import { useMeResponse } from './useMeResponse';

type LoginResponse = {
  errors?: Array<{ code: string; message: string }>;
  success: boolean;
};

export function useLogin() {
  const { setMeFromResponse } = useMeResponse();
  const { login: doLogin, loginLoading } = useAuthService();
  const { setTokens } = useAuthContext();
  const login = useCallback(
    async (email: string, password: string): Promise<LoginResponse> => {
      const { accessToken, refreshToken, me, errors } = await doLogin(email, password);

      if (errors && errors?.length > 0) {
        return {
          errors,
          success: false,
        };
      }

      if (!accessToken || !refreshToken || !me) {
        return {
          success: false,
          errors: [
            {
              code: 'INVALID_PAYLOAD',
              message: 'Authentication succeeded but returned incomplete data.',
            },
          ],
        };
      }

      setMeFromResponse(me);

      await setTokens(accessToken, refreshToken);

      return {
        success: true,
      };
    },
    [doLogin, setMeFromResponse]
  );

  return { login, loginLoading };
}
