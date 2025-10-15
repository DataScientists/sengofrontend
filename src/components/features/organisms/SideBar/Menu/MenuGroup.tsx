import { Icon } from '@chakra-ui/react';
import { Box, Group, List, Stack, Text } from '@components/ui/atoms';
import { Flex } from '@components/ui/atoms/Flex';
import { memo } from 'react';

import { MenuItem } from './MenuItem';
import { MenuGroupProvider, useMenuGroupContext } from './Provider';
import type { SidebarMenuItem } from './types';

interface Props {
  menuItem: SidebarMenuItem;
  isExpanded: boolean;
}

export const MenuGroup: React.FC<Props> = memo(({ menuItem, isExpanded }) => {
  return (
    <MenuGroupProvider menuItem={menuItem}>
      <Component menuItem={menuItem} isExpanded={isExpanded} />
    </MenuGroupProvider>
  );
});

const Component: React.FC<Props> = memo(({isExpanded}) => {
  const {
    ref,
    isMenuExpanded,
    isHovering,
    toggleMenu,
    isActive,
    menuItem: { icon, label, children },
  } = useMenuGroupContext();
  const shouldHighlight = isActive || isHovering;

  const expandMenu = isActive || isMenuExpanded;

  return (
    <Box ref={ref} w="full" height="fit" css={{ minHeight: '44px' }} cursor="button">
      <List as="ul" listStyleType="none">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          onClick={toggleMenu}
          position="relative"
          px="5"
          py="3"
          gap="8px"
          _before={
            shouldHighlight
              ? {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '3px',
                  height: '16px',
                  backgroundColor: 'brand',
                  borderRadius: '1px',
                }
              : {}
          }
        >
          <Group display="flex" justifyContent="center" alignItems="center" gap="8px">
            {icon && (
              <Icon
                display="flex"
                justifyContent="center"
                alignItems="center"
                css={{ width: '16px', height: '16px' }}
                color={shouldHighlight ? 'title.dark' : 'body.dark'}
              >
                {icon(shouldHighlight ? 'active' : 'inactive')}
              </Icon>
            )}

            {isExpanded && (
              <Text
                fontSize="14px"
                lineHeight="normal"
                color={shouldHighlight ? 'title.dark' : 'body.dark'}
                textStyle="bodyThree"
                fontWeight={shouldHighlight ? '600' : '500'}
              >
                {label}
              </Text>
            )}
          </Group>
        </Flex>
        {expandMenu && (
          <Stack pl="10" gapY="3">
            {children?.map((menuItem) => (
              <MenuItem key={menuItem.id} menuItem={menuItem} isExpanded={isExpanded} />
            ))}
          </Stack>
        )}
      </List>
    </Box>
  );
});

Component.displayName = 'MenuGroupComponent';
MenuGroup.displayName = 'MenuGroup';
