import { defineSemanticTokens,defineTokens } from '@chakra-ui/react';

export const colorTokens = defineTokens({
  colors: {
    primary: {
      value: '#4C47CC',
    },
    brand: {
      50: {
        value: '#EDECF9',
      },
      100: {
        value: '#D0CFF2',
      },
      150: {
        value: '#B1AFE9',
      },
      200: {
        value: '#928FE0',
      },
      250: {
        value: '#726FD8',
      },
      300: {
        value: '#4C47CC',
      },
      350: {
        value: '#3935C0',
      },
      400: {
        value: '#302CA0',
      },
      450: {
        value: '#211F70',
      },
      500: {
        value: '#0E0D30',
      },
    },
    body: {
      50: {
        value: '#FFFFFF',
      },
      100: {
        value: '#D0CEDE',
      },
      150: {
        value: '#ADA9C6',
      },
      200: {
        value: '#9591B6',
      },
      250: {
        value: '#7E78A5',
      },
      300: {
        value: '#686293',
      },
      350: {
        value: '#56527A',
      },
      400: {
        value: '#4E496E',
      },
      450: {
        value: '#454162',
      },
      500: {
        value: '#343149',
      },
      550: {
        value: '#2B293D',
      },
    },

    red: {
      1000: {
        value: '#FFE9EA',
      },
      1050: {
        value: '#C7171C',
      },
    },
    orange: {
      1000: {
        value: '#FDEAD3',
      },
      1050: {
        value: '#CF7200',
      },
    },
    green: {
      1000: {
        value: '#E6FFD9',
      },
      1050: {
        value: '#469708',
      },
    },
    blue: {
      1000: {
        value: '#DEEEFF',
      },
      1050: {
        value: '#0057B1',
      },
    },
    purple: {
      1000: {
        value: '#F2E8FE',
      },
      1050: {
        value: '#6A4C93',
      },
    },
  },
});

//TODO: define darak variants of the semantic tokens

export const colorsSemanticTokens = defineSemanticTokens({
  colors: {
    brand: {
      DEFAULT: { value: '{colors.brand.300}' },
      light: {
        value: {
          base: '{colors.brand.150}',
          _dark: '{colors.brand.450}',
        },
      },
      dark: {
        value: '{colors.brand.450}',
      },
      solid: { value: '{colors.brand.300}' },
      contrast: { value: '{colors.brand.100}' },
      fg: { value: '{colors.brand.700}' },
      muted: { value: '{colors.brand.100}' },
      subtle: { value: '{colors.brand.200}' },
      emphasized: { value: '{colors.brand.300}' },
      focusRing: { value: '{colors.brand.300}' },
    },
    title: {
      light: {
        value: '{colors.body.50}',
      },
      dark: {
        value: '{colors.body.450}',
      },
    },
    body: {
      light: {
        value: '{colors.body.100}',
      },
      dark: {
        value: '{colors.body.350}',
      },
    },
    red: {
      light: {
        value: '{colors.red.1000}',
      },
      dark: {
        value: '{colors.red.1050}',
      },
    },
    orange: {
      light: {
        value: '{colors.orange.1000}',
      },
      dark: {
        value: '{colors.orange.1050}',
      },
    },
    green: {
      light: {
        value: '{colors.green.1000}',
      },
      dark: {
        value: '{colors.green.1050}',
      },
    },
    blue: {
      light: {
        value: '{colors.blue.1000}',
      },
      dark: {
        value: '{colors.blue.1050}',
      },
    },
    purple: {
      light: {
        value: '{colors.purple.1000}',
      },
      dark: {
        value: '{colors.purple.1050}',
      },
    },
  },
});
