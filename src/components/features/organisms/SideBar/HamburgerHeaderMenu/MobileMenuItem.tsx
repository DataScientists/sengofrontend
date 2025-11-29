import { Box } from '@components/ui/atoms/Box';
import { Text } from '@components/ui/atoms/Text';
import { useHover } from '@shared/hooks';
import { memo, useMemo } from 'react';
import { Link, useLocation } from 'react-router';

import type { SidebarMenuItem } from '../Menu/types';
import { isMenuActive } from '../Menu/utils';

interface Props {
  menuItem: SidebarMenuItem;
  onItemClick: () => void;
  isChild?: boolean;
}

export const MobileMenuItem: React.FC<Props> = memo(
  ({ menuItem, onItemClick, isChild = false }) => {
    const { ref, isHovering } = useHover<HTMLDivElement>();
    const location = useLocation();

    const isActive = useMemo(
      () => isMenuActive(location.pathname, menuItem),
      [location.pathname, menuItem]
    );

    const shouldHighlight = isActive || isHovering;

    return (
      <Box ref={ref} w="full" onClick={onItemClick}>
        <Link to={menuItem.url ?? ''} replace={isActive}>
          <Box
            px="3"
            py="2"
            borderRadius="8px"
            _hover={{ bg: 'brand.50' }}
            bg={shouldHighlight ? 'brand.50/50' : 'transparent'}
            cursor="pointer"
            position="relative"
            _before={
              shouldHighlight && !isChild
                ? {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3px',
                    height: '12px',
                    backgroundColor: 'brand',
                    borderRadius: '1px',
                  }
                : {}
            }
          >
            {isChild ? (
              <Box display="flex" alignItems="center" gap="8px">
                <Box
                  css={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: shouldHighlight ? '#6E6789' : '#B8B5C3',
                  }}
                />
                <Text
                  fontSize="13px"
                  lineHeight="normal"
                  color={shouldHighlight ? 'title.dark' : 'body.dark'}
                  fontWeight={shouldHighlight ? '600' : '500'}
                >
                  {menuItem.label}
                </Text>
              </Box>
            ) : (
              <Text
                fontSize="14px"
                lineHeight="normal"
                color={shouldHighlight ? 'title.dark' : 'body.dark'}
                fontWeight={shouldHighlight ? '600' : '500'}
              >
                {menuItem.label}
              </Text>
            )}
          </Box>
        </Link>
      </Box>
    );
  }
);

MobileMenuItem.displayName = 'MobileMenuItem';
