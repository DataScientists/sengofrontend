import { Box } from '@components/ui/atoms';

import { useSideBar } from '../hooks';
import { SideBarButton } from './SidebarButton';

export const Header: React.FC = () => {
  const { isExpanded } = useSideBar();

  return (
    <Box
      height={isExpanded ? '14' : '16'}
      w="full"
      position="relative"
      display="flex"
      alignItems="center"
      pl={isExpanded ? '225px' : '75px'}
      justifyContent="end"
      css={{
        transition: 'height 0.3s',
      }}
    >
      <SideBarButton />
    </Box>
  );
};
