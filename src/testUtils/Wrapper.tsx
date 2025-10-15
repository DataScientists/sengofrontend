import { ApolloProvider } from '@shared/apollo/ApolloProvider';
import { ChakraProvider } from '@shared/chakra';
import { JotaiRoot } from '@shared/jotai';
import { HelmetProvider } from 'react-helmet-async';

export const Wrapper: React.FCWithChildren = (props) => {
  return (
    <ApolloProvider>
      <HelmetProvider>
        <ChakraProvider>
          <JotaiRoot>{props.children}</JotaiRoot>
        </ChakraProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
};
