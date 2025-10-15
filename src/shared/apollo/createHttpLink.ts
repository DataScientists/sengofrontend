import { HttpLink, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { config } from '@config/config';
import { createClient } from 'graphql-ws';

export type CreateHttpProps = {
  accessToken: string;
};

export const createHttpLink = (props: CreateHttpProps) => {
  const httpLink = new HttpLink({
    uri: config.API_GRAPHQL_ENDPOINT,
    headers: {
      Authorization: `Bearer ${props.accessToken}`,
    },
  });

  const wsClient = createClient({
    url: config.API_SUBSCRIPTION_URL,
    lazy: true,
    connectionParams: () => ({
      authorization: `Bearer ${props.accessToken}`,
    }),
  });
  const wsLink = new GraphQLWsLink(wsClient);

  return split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
  );
};
