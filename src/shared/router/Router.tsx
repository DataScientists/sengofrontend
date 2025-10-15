// src/components/services/AppRouter.tsx
import { config } from '@config/config';
import * as Sentry from '@sentry/react';
import React from 'react';
import type { BrowserRouterProps } from 'react-router-dom';
import { BrowserRouter, Routes as BaseRoutes } from 'react-router-dom';

// Wrap the v7 <Routes> component once for Sentry tracing:
export const SentryRoutes = Sentry.withSentryReactRouterV7Routing(BaseRoutes);

export const AppRouter: React.FC<BrowserRouterProps> = ({ children, ...rest }) => {
  return (
    <BrowserRouter basename={config.APP_MOUNT_URI} {...rest}>
      {children}
    </BrowserRouter>
  );
};
