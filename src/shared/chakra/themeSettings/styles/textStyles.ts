import { defineTextStyles } from '@chakra-ui/react';

//TODO: Define all typography from figma design

export const textStyles = defineTextStyles({
  display: {
    description: 'Big title',
    value: {
      fontFamily: 'main',
      fontWeight: 'extrabold',
      fontSize: '6.5xl',
      lineHeight: 'shorter',
      letterSpacing: 'none',
      textDecoration: 'None',
      textTransform: 'none',
    },
  },
  largeTitle: {
    description: 'Large Title',
    value: {
      fontFamily: 'main',
      fontWeight: 'extrabold',
      fontSize: '4.5xl',
      lineHeight: 'shorter',
      letterSpacing: 'none',
      textDecoration: 'None',
      textTransform: 'none',
    },
  },
  subtitle: {
    description: 'subtitle',
    value: {
      fontWeight: 'semibold',
      fontSize: 'xl',
      lineHeight: 'moderate',
      letterSpacing: 'none',
    },
  },
  bodyTwo: {
    description: 'body two text style',
    value: {
      fontWeight: 'normal',
      fontSize: 'sm',
      lineHeight: 'moderate',
      letterSpacing: 'none',
      textDecoration: 'None',
      textTransform: 'none',
    },
  },
  bodyTwoStrong: {
    description: 'body two text style',
    value: {
      fontWeight: 'medium',
      fontSize: 'sm',
      lineHeight: 'moderate',
      letterSpacing: 'none',
      textDecoration: 'None',
      textTransform: 'none',
    },
  },
  bodyThree: {
    description: 'body three text style',
    value: {
      fontWeight: 'normal',
      fontSize: '13',
      lineHeight: 'moderate',
      letterSpacing: 'none',
      textDecoration: 'None',
      textTransform: 'none',
    },
  },
  caption: {
    description: 'caption text style',
    value: {
      fontWeight: 'normal',
      fontSize: 'xs',
      lineHeight: 'moderate',
      letterSpacing: 'none',
      textDecoration: 'None',
      textTransform: 'none',
    },
  },
});
