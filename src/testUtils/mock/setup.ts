import { server } from '@mocks/server';

/**
 * Call this once at the top of your test file (or put it in your
 * global Jest setup file) to wire up MSW:
 */
export function setupMsw(callback?: () => Promise<void>) {
  beforeAll(async () => {
    if (callback) await callback();

    server.listen({ onUnhandledRequest: 'error' });
  });

  afterEach(async () => {
    server.resetHandlers();

    if (callback) await callback();
  });

  afterAll(async () => {
    server.close();

    if (callback) await callback();
  });
}
