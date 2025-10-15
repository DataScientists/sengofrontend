import {
  type IconButtonProps as ChakraIconButtonProps,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import type { buttonRecipe } from '@shared/chakra/themeSettings/recipes';
import * as React from 'react';

export type IconButtonProps = ChakraIconButtonProps & RecipeVariantProps<typeof buttonRecipe>;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    const recipe = useRecipe({ key: 'button' });
    const [recipeProps, restProps] = recipe.splitVariantProps(props);

    const styles = recipe(recipeProps);

    return <ChakraIconButton ref={ref} css={styles} {...restProps} />;
  }
);
