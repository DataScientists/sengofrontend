import { Icon } from '@chakra-ui/react';
import { Box } from '@components/ui/atoms/Box';
import { Flex } from '@components/ui/atoms/Flex';
import { Group } from '@components/ui/atoms/Group';
import { Stack } from '@components/ui/atoms/Stack';
import { Text } from '@components/ui/atoms/Text';
import { useHover } from '@shared/hooks';
import { ArrowDown2, ArrowUp2 } from 'iconsax-reactjs';
import { memo, useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import type { SidebarMenuItem } from '../Menu/types';
import { isMenuActive } from '../Menu/utils';
import { MobileMenuItem } from './MobileMenuItem';

interface Props {
  menuItem: SidebarMenuItem;
  onItemClick: () => void;
}

export const MobileMenuGroup: React.FC<Props> = memo(({ menuItem, onItemClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isHovering } = useHover<HTMLDivElement>();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = useMemo(
    () => isMenuActive(location.pathname, menuItem),
    [location.pathname, menuItem]
  );

  const handleToggle = useCallback(() => {
    if (menuItem.url) {
      void navigate(menuItem.url);

      if (!menuItem.children || menuItem.children.length === 0) {
        onItemClick();
      }
    } else {
      setIsExpanded((prev) => !prev);
    }
  }, [menuItem.url, menuItem.children, navigate, onItemClick]);

  const shouldHighlight = useMemo(() => isActive || isHovering, [isActive, isHovering]);
  const shouldExpand = useMemo(() => isActive || isExpanded, [isActive, isExpanded]);

  const renderedIcon = useMemo(() => {
    if (!menuItem.icon) return null;

    return (
      <Icon
        display="flex"
        justifyContent="center"
        alignItems="center"
        css={{ width: '20px', height: '20px' }}
        color={shouldHighlight ? 'title.dark' : 'body.dark'}
      >
        {menuItem.icon(shouldHighlight ? 'active' : 'inactive')}
      </Icon>
    );
  }, [menuItem.icon, shouldHighlight]);

  const hasChildren = menuItem.children && menuItem.children.length > 0;

  return (
    <Box ref={ref} w="full">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        onClick={handleToggle}
        cursor="pointer"
        px="3"
        py="2"
        borderRadius="8px"
        _hover={{ bg: 'brand.50' }}
        bg={shouldHighlight ? 'brand.50/50' : 'transparent'}
        position="relative"
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
        <Group display="flex" alignItems="center" gap="8px">
          {renderedIcon}
          <Text
            fontSize="14px"
            lineHeight="normal"
            color={shouldHighlight ? 'title.dark' : 'body.dark'}
            fontWeight={shouldHighlight ? '600' : '500'}
          >
            {menuItem.label}
          </Text>
        </Group>
        {hasChildren && (
          <Icon css={{ width: '16px', height: '16px' }}>
            {shouldExpand ? (
              <ArrowUp2 size="16" color="#6E6789" />
            ) : (
              <ArrowDown2 size="16" color="#6E6789" />
            )}
          </Icon>
        )}
      </Flex>

      {hasChildren && shouldExpand && (
        <Stack pl="8" pt="2" display="flex" flexDirection="column" gap="4">
          {menuItem.children?.map((child) => (
            <MobileMenuItem key={child.id} menuItem={child} onItemClick={onItemClick} isChild />
          ))}
        </Stack>
      )}
    </Box>
  );
});

MobileMenuGroup.displayName = 'MobileMenuGroup';
