import { type ErrorResponse } from '@apollo/client/link/error';

let unauthorized = false;

// For websocket
export const websocketErrorHandler = async (errors: Error[]) => {
  const authError = errors.find((e) => ~e?.message.indexOf('has expired at'));

  if (authError) {
    console.error('auth error!');
    handleUnauthorizedError();
  }
};

// For graphql
export const graphqlErrorHandler = ({ graphQLErrors, networkError }: ErrorResponse) => {
  // console.log('graphQLErrors: ', graphQLErrors)

  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      { console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`); }
    );

  if ((networkError as any)?.statusCode === 401) {
    handleUnauthorizedError();
  }

  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`);
};

const handleUnauthorizedError = () => {
  if (unauthorized) return;

  unauthorized = true;
};
