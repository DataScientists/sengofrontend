import { defaultSystem } from '@chakra-ui/react';

const { tokens } = defaultSystem;

const colors = tokens.categoryMap.get('colors')!;
const allColors = Array.from(colors.values());

const keys = ['brand', 'body'];

export const colorTokens = keys.map((key) =>
  allColors.filter(
    (token) => token.name.startsWith(`colors.${key}`) && !token.extensions.conditions
  )
);
