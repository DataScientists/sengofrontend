import { IconButton } from '@components/ui/atoms/IconButton';
import { useHover } from '@shared/hooks';
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-reactjs';

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
      h="24px"
      minW="24px"
      css={{
        transition: 'right 0.3s',
      }}
      _hover={{
        bg: 'transparent',
      }}
    >
      {useSideBar().isExpanded ? (
        <ArrowCircleLeft size={24} color="#6E6789" variant="Bold" />
      ) : (
        <ArrowCircleRight size={24} color="#6E6789" variant="Bold" />
      )}
    </IconButton>
  );
};
