import {
  Input as ChakraInput,
  type InputProps as ChakraInputProps,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import type { inputRecipe } from '@shared/chakra/themeSettings/recipes/Input.recipe';
import React from 'react';

export type InputProps = ChakraInputProps & RecipeVariantProps<typeof inputRecipe>;

export const Input: React.FC<InputProps> = (props) => {
  const recipe = useRecipe({ key: 'input' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);

  const styles = recipe(recipeProps);

  return <ChakraInput css={styles} {...restProps} colorPalette="brand" />;
};
