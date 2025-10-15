import { Stack } from '@components/ui/atoms';
import { Flex } from '@components/ui/atoms/Flex';
import { BrandLogo } from '@components/ui/molecules';
import { useNavigate } from 'react-router';

import { Footer } from './Footer';
import { Header } from './Header';
import { useSideBar } from './hooks';
import { Menu, SystemMenu } from './Menu';
import { OnlineUser } from './OnlineUser';

export const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    void navigate('/');
  };

  const { isExpanded } = useSideBar();

  return (
    <Flex
      as="aside"
      flexDir="column"
      css={{
        width: isExpanded ? '204px' : '54px',
        height: 'full',
        flexShrink: '0',
      }}
      bg={'body.50'}
      boxShadow="2px 0 10px 0 rgba(236, 238, 241, 0.70)"
      position="relative"
    >
      <Stack display="inline-flex" gap="8px" mt="28px" alignItems="center">
        <BrandLogo onClick={handleLogoClick} isExpanded={isExpanded} />
      </Stack>

      <Header />
      <Stack
        display="inline-flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        height="880px"
        flexShrink="0"
      >
        <Flex display="flex" flexDirection="column" alignItems="center" gap="48px">
          <OnlineUser isExpanded={isExpanded} />

          <Menu isExpanded={isExpanded} />
          <SystemMenu isExpanded={isExpanded} />
        </Flex>
        <Footer isExpanded={isExpanded} />
      </Stack>
    </Flex>
  );
};
