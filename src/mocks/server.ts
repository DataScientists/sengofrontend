import { setupServer } from 'msw/node';

import { handlers as mutationHandlers } from './mutations/handlers';
// import { handlers as queryHandlers } from './queries/handlers'

export const server = setupServer(...[...mutationHandlers]);

export const removeAllListeners = () => {
  server.events.removeAllListeners();
};
