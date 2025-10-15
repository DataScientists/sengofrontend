import { defineRecipe } from '@chakra-ui/react';

export const inputRecipe = defineRecipe({
  defaultVariants: {
    size: 'big',
    variant: 'outline',
  },
  base: {
    justifyContent: 'space-between',
    textStyle: 'bodyTwo',
    _invalid: {
      borderColor: 'red.1050',
      focusRingColor: 'red.1050',
    },
  },
  variants: {
    variant: {
      outline: {
        borderRadius: 'sm',
        borderColor: 'title.dark/20',
      },
    },
    size: {
      big: { height: '10', paddingY: '2.5', paddingX: '4' },
    },
  },
});
