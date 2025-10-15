import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
    display: 'flex',
    borderRadius: 'sm',
    fontFamily: 'main',
    fontSize: 'sm',
    fontWeight: 'medium',
  },
  variants: {
    visual: {
      primary: {
        bg: 'brand',
        color: 'title.light',
        _disabled: {
          bg: 'brand/60',
          color: 'title.light',
        },
        _hover: {
          bg: 'brand.350',
        },
      },
      secondary: {
        borderWidth: 'thin',
        borderColor: 'brand.300',
        color: 'brand.300',
        bg: 'body.50',
        _hover: {
          borderColor: 'brand.350',
          color: 'brand.350',
          bg: 'body.50',
        },
      },
      inherit: {
        borderWidth: 'thin',
        borderColor: 'body.dark/70',
        bg: 'body.50',
        color: 'body.dark',
        _hover: {
          borderColor: 'body.dark',
          bg: 'body.50',
        },
      },
      ghost: {
        bg: 'transparent',
        _hover: {
          bg: 'transparent !important',
        },
      },
    },
    size: {
      small: {
        width: '38',
        height: '8.5',
        paddingY: '2',
        paddingX: '3',
      },
      big: { width: '38', height: '11.1', paddingY: '2', paddingX: '3' },
    },
  },
});
