import { Icon } from '@chakra-ui/react';
import { Box } from '@components/ui/atoms/Box';
import { Flex } from '@components/ui/atoms/Flex';
import { Group } from '@components/ui/atoms/Group';
import { List } from '@components/ui/atoms/List';
import { Stack } from '@components/ui/atoms/Stack';
import { Text } from '@components/ui/atoms/Text';
import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';

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

const Component: React.FC<Props> = memo(({ isExpanded }) => {
  const {
    ref,
    isMenuExpanded,
    isHovering,
    toggleMenu,
    isActive,
    menuItem: { icon, label, children, url },
  } = useMenuGroupContext();
  const navigate = useNavigate();

  const handleMenuClick = useCallback(() => {
    if (url) void navigate(url);
    else toggleMenu();
  }, [url, navigate, toggleMenu]);

  const shouldHighlight = useMemo(() => isActive || isHovering, [isActive, isHovering]);
  const expandMenu = useMemo(() => isActive || isMenuExpanded, [isActive, isMenuExpanded]);

  // Memoize rendering of MenuItem children
  const renderMenuItems = useCallback(
    () =>
      children?.map((child) => (
        <MenuItem key={child.id} menuItem={child} isExpanded={isExpanded} />
      )),
    [children, isExpanded]
  );

  // Memoize icon render, although it is a very shallow calculation.
  const renderedIcon = useMemo(() => {
    if (!icon) return null;

    return (
      <Icon
        display="flex"
        justifyContent="center"
        alignItems="center"
        css={{ width: '16px', height: '16px' }}
        color={shouldHighlight ? 'title.dark' : 'body.dark'}
      >
        {icon(shouldHighlight ? 'active' : 'inactive')}
      </Icon>
    );
  }, [icon, shouldHighlight]);

  // Memoize label render.
  const renderedLabel = useMemo(() => {
    if (!isExpanded) return null;

    return (
      <Text
        fontSize="14px"
        lineHeight="normal"
        color={shouldHighlight ? 'title.dark' : 'body.dark'}
        textStyle="bodyThree"
        fontWeight={shouldHighlight ? '600' : '500'}
      >
        {label}
      </Text>
    );
  }, [isExpanded, label, shouldHighlight]);

  return (
    <Box ref={ref} w="full" height="fit" css={{ minHeight: '44px' }} cursor="button">
      <List as="ul" listStyleType="none">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          onClick={handleMenuClick}
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
            {renderedIcon}
            {renderedLabel}
          </Group>
        </Flex>
        {expandMenu && (
          <Stack pl="10" gapY="3">
            {renderMenuItems()}
          </Stack>
        )}
      </List>
    </Box>
  );
});

Component.displayName = 'MenuGroupComponent';
MenuGroup.displayName = 'MenuGroup';
