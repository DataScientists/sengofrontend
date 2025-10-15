import { loginMutation } from '@mocks/mutations/login';
import { server } from '@mocks/server';
import { setupMsw } from '@test/mock';
import { Wrapper } from '@test/Wrapper';
import { act, renderHook } from '@testing-library/react';

import { useAuthService } from '../useAuthService';
import {
  mockAuthenticationError,
  mockAuthPayload,
  mockAuthPayloadNoError,
  mockLoginInput,
} from './mockData';

setupMsw();

// 3️⃣ Test suite
describe('Test useAuthService', () => {
  it('should return payload on successful login', async () => {
    const authPayload = mockAuthPayloadNoError();
    const input = mockLoginInput();

    server.use(
      loginMutation({
        networkError: false,
        res: {
          login: {
            ...authPayload,
          },
        },
      })
    );

    const { result } = renderHook(() => useAuthService(), { wrapper: Wrapper });
    let response: any;

    await act(async () => {
      response = await result.current.login(input.email, input.password);
    });

    expect(response.accessToken).toBeDefined();
    expect(response.refreshToken).toBeDefined();
    expect(response.me).toMatchObject({
      id: expect.any(String),
      name: expect.any(String),
      email: expect.any(String),
    });
  });

  it('should throw network error when configured', async () => {
    // Simulate network error
    server.use(loginMutation({ networkError: true }));

    const { result } = renderHook(() => useAuthService(), { wrapper: Wrapper });

    await act(async () => {
      await expect(result.current.login('error@network', 'pw')).rejects.toThrow(
        'Unknown authentication error'
      );
    });
  });

  it('should return invalid credentials error when credentials are wrong', async () => {
    const authPayload = mockAuthPayload({
      errors: [mockAuthenticationError()],
    });
    const input = mockLoginInput();

    server.use(
      loginMutation({
        networkError: false,
        res: {
          login: {
            ...authPayload,
          },
        },
      })
    );

    const { result } = renderHook(() => useAuthService(), { wrapper: Wrapper });
    let response: any;

    await act(async () => {
      response = await result.current.login(input.email, input.password);
    });

    expect(response.errors).toHaveLength(1);
    expect(response.errors[0].code).toEqual('AUTHENTICATION_ERROR');
  });
});
