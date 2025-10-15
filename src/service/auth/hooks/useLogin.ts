import { useLoginMutation } from '@graphql/hooks';
import { useCallback } from 'react';

import type { AuthPayloadResponse } from '../types';

type LoginPayload = AuthPayloadResponse;

type LoginReturn = {
  login: (email: string, password: string) => Promise<LoginPayload>;
  loginLoading: boolean;
};

export const useLogin = (): LoginReturn => {
  const [loginMutation, { loading: loginLoading }] = useLoginMutation();

  /**
   * Executes the login mutation and returns the payload or throws.
   */
  const login = useCallback(
    async (email: string, password: string): Promise<LoginPayload> => {
      const response = await loginMutation({
        variables: { input: { email, password } },
      });
      const loginRes = response.data?.login;

      if (!loginRes) {
        throw new Error('Login failed');
      }

      return loginRes as LoginPayload;
    },
    [loginMutation]
  );
  
  return { login, loginLoading };
};
