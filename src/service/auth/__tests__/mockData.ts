import type { AuthenticationError, AuthPayload } from '@graphql/types';
import {
  mockAuthenticationError as _mockAuthErr,
  mockAuthPayload,
  mockLoginInput,
} from '@graphql/types/data.mock';

export { mockAuthPayload, mockLoginInput };

export const mockAuthenticationError = (
  overrides: Partial<AuthenticationError> = {}
): { __typename: 'AuthenticationError' } & AuthenticationError => {
  return _mockAuthErr({ code: 'AUTHENTICATION_ERROR', ...overrides });
};

export const mockAuthPayloadNoError = (
  overrides: Partial<AuthPayload> = {}
): { __typename: 'AuthPayload' } & AuthPayload => {
  return mockAuthPayload({
    // force an empty errors array
    errors: null,
    // now apply any other overrides on top
    ...overrides,
  });
};
