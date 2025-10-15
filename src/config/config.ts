/* eslint-disable no-console */

export const getAppDefaultUri = () => '/';
export const getAppMountUri = () => window?.__APP_CONFIG__?.APP_MOUNT_URI || getAppDefaultUri();

export const config = {
  NODE_ENV: process.env.NODE_ENV!,
  APP_MOUNT_URI: process.env.APP_MOUNT_URI!,
  API_URL: process.env.API_URL!,
  API_GRAPHQL_ENDPOINT: process.env.API_GRAPHQL_ENDPOINT!,
  DEMO_MODE: process.env.DEMO_MODE!,
  API_SUBSCRIPTION_URL: process.env.API_SUBSCRIPTION_URL!,
  SENTRY_DSN: process.env.SENTRY_DSN,
  SENTRY_RELEASE: process.env.SENTRY_RELEASE,
  SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
  SENTRY_ORG: process.env.SENTRY_ORG,
  SENTRY_PROJECT: process.env.SENTRY_PROJECT,
  RELEASE_NAME: process.env.RELEASE_NAME,
} as const;

const __DEV__ = process.env.NODE_ENV === 'development';

if (__DEV__ && process.env.NODE_ENV !== 'test') {
  console.groupCollapsed('config');
  console.groupEnd();
}
