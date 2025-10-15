import { ApolloProvider as ApolloProviderLibs } from '@apollo/client';
import { useAuth } from '@shared/auth';
import React, { useMemo } from 'react';

import { createApolloClient } from './client';

export const ApolloProvider: React.FCWithChildren = (props) => {
  const { accessToken } = useAuth();

  const client = useMemo(() => {
    return createApolloClient({ accessToken });
  }, [accessToken]);

  return <ApolloProviderLibs client={client}>{props.children}</ApolloProviderLibs>;
};
