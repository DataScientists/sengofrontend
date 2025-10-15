// @ts-strict-ignore
import { config } from '@config/config';

import { SentryAdapter } from './adapters';
import { ErrorTrackerFactory } from './trackerFactory';

const errorTracker = ErrorTrackerFactory(
  SentryAdapter({
    dsn: config.SENTRY_DSN ?? '',
    environment: config.NODE_ENV,
    release: config.RELEASE_NAME,
  })
);

export default errorTracker;
