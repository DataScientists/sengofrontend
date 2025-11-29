import { Flex } from '@components/ui/atoms/Flex';

import { useSideBar } from '../hooks';
import { SideBarButton } from './SidebarButton';

export const Header: React.FC = () => {
  const { isExpanded } = useSideBar();

  return (
    <Flex
      height={isExpanded ? '14' : '16'}
      w="full"
      position="relative"
      alignItems="center"
      pl={isExpanded ? '216px' : '66px'}
      justifyContent="end"
      css={{
        transition: 'height 0.3s',
      }}
    >
      <SideBarButton />
    </Flex>
  );
};
