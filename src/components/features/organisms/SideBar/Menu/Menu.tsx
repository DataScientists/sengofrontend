import { Box } from '@components/ui/atoms/Box';
import { List } from '@components/ui/atoms/List';
import { Stack } from '@components/ui/atoms/Stack';
import { Text } from '@components/ui/atoms/Text';
import { memo } from 'react';

import { useMenuStructure } from './hooks';
import { MenuItem } from './MenuItem';

interface MenuProps {
  isExpanded: boolean;
}

export const Menu: React.FC<MenuProps> = memo(({ isExpanded }) => {
  const menustructure = useMenuStructure();

  return (
    <Stack display="flex" flexDirection="column" alignItems="flex-start" gap="24px">
      {isExpanded && (
        <Box w="full" padding="0 24px">
          <Text
            fontSize="12px"
            fontWeight="500"
            textTransform="uppercase"
            color="body.dark"
            borderBottom="1px solid"
            borderColor="body.550/10"
            pb={1}
          >
            Payment
          </Text>
        </Box>
      )}
      <List as="ol" display="grid" gap="0" data-test-id="menu-list">
        {menustructure.map((menuItem) => (
          <MenuItem key={menuItem.id} menuItem={menuItem} isExpanded={isExpanded} />
        ))}
      </List>
    </Stack>
  );
});

Menu.displayName = 'Menu';
