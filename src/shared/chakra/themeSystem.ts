import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import {
  borderWidhtsToken,
  colorsSemanticTokens,
  colorTokens,
  gradientsTokens,
  sizeSemanticTokens,
  sizeTokens,
  spacingTokens,
  textStyles,
} from './themeSettings/';
import { avatarSlotRecipe, buttonRecipe, inputRecipe } from './themeSettings/recipes';

const config = defineConfig({
  strictTokens: true,
  globalCss: {
    '*': {
      fontSmooth: 'antialiased',
    },
    'html, body': {
      width: 'full',
      height: 'full',
      fontFamily: 'main',
      overflow: 'hidden',
      colorPalette: 'brand',
    },
  },
  theme: {
    textStyles,
    recipes: {
      button: buttonRecipe,
      input: inputRecipe,
      iconButton: buttonRecipe,
    },
    slotRecipes: {
      avatar: avatarSlotRecipe,
    },

    tokens: {
      ...colorTokens,
      ...gradientsTokens,
      ...spacingTokens,
      ...sizeTokens,
      ...borderWidhtsToken,
      fonts: {
        body: {
          value: 'Plus Jakarta Sans Variable',
        },
      },
      fontSizes: {
        '6.5xl': {
          value: '4rem',
        },
        '4.5xl': {
          value: '2.5rem',
        },
        '13': {
          value: '0.813rem',
        },
      },
      letterSpacings: {
        none: {
          value: '0px',
        },
      },
    },
    semanticTokens: {
      ...colorsSemanticTokens,
      ...sizeSemanticTokens,
      fonts: {
        main: {
          value: '{fonts.body}',
        },
        shadows: {
          loginCard: {
            value: '0 0 60px 0 rgba(154, 137, 164, 0.2)',
          },
        },
      },
    },
  },
});

export const themeSystem = createSystem(defaultConfig, config);
export default themeSystem;
export const transitions = {
  base: (prop?: string) => `${prop ?? 'all'} .15s ease-out`,
};
