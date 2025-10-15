import { ChakraProvider as Provider } from '@chakra-ui/react';
import { themeSystem } from '@shared/chakra/themeSystem';

import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

export function ChakraProvider(props: ColorModeProviderProps) {
  return (
    <Provider value={themeSystem}>
      <ColorModeProvider {...props} />
    </Provider>
  );
}
