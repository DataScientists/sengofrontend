import { defineSlotRecipe } from '@chakra-ui/react';
import { avatarAnatomy } from '@chakra-ui/react/anatomy';

export const avatarSlotRecipe = defineSlotRecipe({
  slots: avatarAnatomy.keys(),
  variants: {
    size: {
      '3sx': {
        root: {
          height: '6',
          width: '6',
        },
      },
    },
  },
});
