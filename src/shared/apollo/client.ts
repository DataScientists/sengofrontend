import { ApolloClient, InMemoryCache, type NormalizedCacheObject } from '@apollo/client';
import { loadDevMessages,loadErrorMessages } from '@apollo/client/dev';
import { config } from '@config/config';

import { createLink, type CreateLinkProps } from './createLink';

type Props = CreateLinkProps;

let client: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = (props: Props) => {
  if (!client) {
    client = new ApolloClient({
      link: createLink(props),
      cache: new InMemoryCache(),
      defaultOptions: {
        // NOTE: Prevent unnecessary re-fetching after mutation.
        // @see https://github.com/apollographql/apollo-client/issues/6833
        watchQuery: {
          fetchPolicy: 'no-cache',
        },
        query: {
          fetchPolicy: 'no-cache',
        },
        mutate: {
          fetchPolicy: 'no-cache',
        },
      },
    });

    return client;
  }

  return client;
};

export const resetApolloLink = async (accessToken: string) => {
  client.setLink(createLink({ accessToken }));
};

export const setErrorToken = () => {
  client.setLink(createLink({ accessToken: 'test' }));
};

if (config.NODE_ENV !== 'production') {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
