import { defineSemanticTokens, defineTokens } from '@chakra-ui/react';

export const sizeTokens = defineTokens({
  sizes: {
    '38': {
      value: '156px',
    },
    '8.5': {
      value: '34px',
    },
    '10.1': {
      value: '41px',
    },
    '11.1': {
      value: '45px',
    },
    '98.5': {
      value: '26.5rem',
    },
    '120': {
      value: '120rem',
    },
  },
});

export const sizeSemanticTokens = defineSemanticTokens({
  sizes: {
    '12xl': {
      value: '{sizes.120}',
    },
  },
});
