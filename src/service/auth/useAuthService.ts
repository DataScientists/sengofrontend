import { useLogin } from './hooks';
import type { AuthPayloadResponse } from './types';

type LoginPayload = AuthPayloadResponse;

type AuthServiceReturn = {
  login: (email: string, password: string) => Promise<LoginPayload>;
  loginLoading: boolean;
};

export function useAuthService(): AuthServiceReturn {
  const { login, loginLoading } = useLogin();

  return { login, loginLoading };
}
