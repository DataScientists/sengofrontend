import { useAuthService } from "@service/auth";
import { useAuthContext } from "@shared/auth";
import { useCallback } from "react";

import { useMeResponse } from "./useMeResponse";

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
      const { accessToken, refreshToken, user } = await doLogin(
        email,
        password,
      );

      if (!accessToken || !refreshToken || !user) {
        return {
          success: false,
          errors: [
            {
              code: "INVALID_PAYLOAD",
              message: "Authentication succeeded but returned incomplete data.",
            },
          ],
        };
      }

      setMeFromResponse(user);

      await setTokens(accessToken, refreshToken);

      return {
        success: true,
      };
    },
    [doLogin, setMeFromResponse],
  );

  return { login, loginLoading };
}
