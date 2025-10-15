import {
  type ButtonProps as ChakraButtonProps,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/react';
import type { buttonRecipe } from '@shared/chakra/themeSettings/recipes';
import React from 'react';

export type ButtonProps = ChakraButtonProps & RecipeVariantProps<typeof buttonRecipe>;

export const Button: React.FC<ButtonProps> = (props) => {
  const recipe = useRecipe({ key: 'button' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);

  const styles = recipe(recipeProps);

  return <ChakraButton css={styles} {...restProps} />;
};
