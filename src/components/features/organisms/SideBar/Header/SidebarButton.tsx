import { Icon } from '@chakra-ui/react';
import { ChevronLeftIcon, IconButton } from '@components/ui/atoms';
import { useHover } from '@shared/hooks';

import { useSideBar } from '../hooks';

export const SideBarButton: React.FC = () => {
  const { toggleSideBar } = useSideBar();
  const { ref } = useHover<HTMLButtonElement>();

  return (
    <IconButton
      ref={ref}
      cursor="button"
      onClick={toggleSideBar}
      bg="transparent"
      css={{
        p: '6px',
        transition: 'right 0.3s',
      }}
      _hover={{
        bg: 'transparent',
      }}
    >
      <Icon css={{ height: '24px', width: '24px', flexShrink: '0' }}>
        <ChevronLeftIcon />
      </Icon>
    </IconButton>
  );
};
