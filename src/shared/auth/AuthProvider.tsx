import { createProvider } from '@shared/react/createProvider';

import { useAuth } from './hooks';

type ContextProps = ReturnType<typeof useAuth>;

const useValue = (): ContextProps => {
  return useAuth();
};

useValue.__PROVIDER__ = 'src/shared/auth/AuthProvider.tsx';

export const { Provider: AuthProvider, useContext: useAuthContext } = createProvider(useValue);
