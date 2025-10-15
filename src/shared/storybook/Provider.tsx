import { ApolloProvider as ApolloProviderLibs } from '@apollo/client';
import { createApolloClient } from '@shared/apollo/client';
import { ChakraProvider } from '@shared/chakra';
import { useMemo } from 'react';
import { HelmetProvider } from 'react-helmet-async';

export const Provider: React.FCWithChildren = (props) => {
  const { children, ...rest } = props;

  return (
    <HelmetProvider>
      <ChakraProvider {...rest}>
        <ApolloProvider>{children}</ApolloProvider>
      </ChakraProvider>
    </HelmetProvider>
  );
};

const ApolloProvider: React.FCWithChildren = (props) => {
  const client = useMemo(
    () => createApolloClient({ accessToken: 'token' }),

    []
  );

  return <ApolloProviderLibs client={client}>{props.children}</ApolloProviderLibs>;
};
