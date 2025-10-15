import '@fontsource-variable/plus-jakarta-sans/index.css';
import './index.css';

import { ApolloProvider } from '@shared/apollo/ApolloProvider';
import { AuthProvider } from '@shared/auth';
import { ChakraProvider } from '@shared/chakra';
import errorTracker from '@shared/errorTracking/errorTracker';
import { JotaiRoot } from '@shared/jotai';
import { AppRouter } from '@shared/router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { Routes } from './Routes';

errorTracker.init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider>
      <HelmetProvider>
        <ChakraProvider>
          <JotaiRoot>
            <AuthProvider>
              <AppRouter>
                <Routes />
              </AppRouter>
            </AuthProvider>
          </JotaiRoot>
        </ChakraProvider>
      </HelmetProvider>
    </ApolloProvider>
  </StrictMode>
);
