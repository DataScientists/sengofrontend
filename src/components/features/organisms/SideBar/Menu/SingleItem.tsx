import { Box, ListItem, Text } from '@components/ui/atoms';
import { useHover } from '@shared/hooks';
import { Link } from 'react-router';

import type { SidebarMenuItem } from './types';

interface Props {
  menuItem: SidebarMenuItem;
  isActive: boolean;
  isExpanded: boolean;
}

export const SingleItem: React.FC<Props> = ({ menuItem, isActive, isExpanded }) => {
  const { ref, isHovering } = useHover<HTMLDivElement>();
  const shouldHighlight = isActive || isHovering;

  return (
    <Box ref={ref}>
      <ListItem _marker={{ color: shouldHighlight ? 'brand' : 'brand.light' }}>
        <Link to={menuItem.url ?? ''} replace={isActive}>
          <Box>
            {isExpanded && (
              <Text
                fontSize="12px"
                lineHeight="normal"
                color={shouldHighlight ? 'title.dark' : 'body.dark'}
                textStyle="bodyThree"
                fontWeight={shouldHighlight ? '700' : '500'}
              >
                {menuItem.label}
              </Text>
            )}
          </Box>
        </Link>
      </ListItem>
    </Box>
  );
};

SingleItem.displayName = 'SingleItem';
