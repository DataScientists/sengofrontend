import { For, useRecipe } from '@chakra-ui/react';
import { StoryTable } from '@components/Story';

import { Span } from '../../Span';
import { Stack } from '../../Stack';
import { Input } from '../Input';

export const InputSizeTable = () => {
  const recipe = useRecipe({ key: 'input' });

  return (
    <StoryTable>
      <tbody>
        <For each={recipe.variantMap.size}>
          {(v) => (
            <tr key={v}>
              <td>
                <Span fontSize="sm" color="fg.muted" minW="20">
                  {v}
                </Span>
              </td>
              <td>
                <Stack>
                  <Input size={v} placeholder="Placeholder" />
                  <Input variant="subtle" size={v} placeholder="Placeholder" />
                </Stack>
              </td>
            </tr>
          )}
        </For>
      </tbody>
    </StoryTable>
  );
};
