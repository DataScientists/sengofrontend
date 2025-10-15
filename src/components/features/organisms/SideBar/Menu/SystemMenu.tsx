import { Flex, List, Stack, Text } from '@components/ui/atoms';
import { Divider } from '@components/ui/molecules';
import { memo } from 'react';

import { useSystemMenuStructure } from './hooks';
import { MenuItem } from './MenuItem';

interface MenuProps {
  isExpanded: boolean;
}

export const SystemMenu: React.FC<MenuProps> = memo(({ isExpanded }) => {
  const menustructure = useSystemMenuStructure();

  return (
    <Stack display="flex" flexDirection="column" alignItems="flex-start" gap="24px">
      {isExpanded && (
        <Flex
          display="flex"
          width="204px"
          padding="0 24px"
          flexDirection="column"
          alignItems="flex-start"
          gap="4px"
        >
          <Text
            fontSize="12px"
            fontWeight="500"
            textTransform="uppercase"
            color="body.dark"
            opacity="0.7"
          >
            System
          </Text>
          <Divider position="absolute" left="0" right="0" width="full" height="1px" opacity="0.7" />
        </Flex>
      )}
      <List as="ol" display="grid" gap="0" data-test-id="system-menu-list">
        {menustructure.map((menuItem) => (
          <MenuItem key={menuItem.id} menuItem={menuItem} isExpanded={isExpanded} />
        ))}
      </List>
    </Stack>
  );
});

SystemMenu.displayName = 'SystemMenu';
