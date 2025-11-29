import { Flex } from '@components/ui/atoms/Flex';
import { Stack } from '@components/ui/atoms/Stack';
import { BrandLogo } from '@components/ui/molecules/BrandLogo';
import { useBreakpointValue } from '@shared/chakra/chakra';
import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';

import { Footer } from './Footer';
import { HamburgerHeaderMenu } from './HamburgerHeaderMenu';
import { Header } from './Header';
import { useSideBar } from './hooks';
import { Menu, SystemMenu } from './Menu';
import { OnlineUser } from './OnlineUser';

export const SideBar: React.FC = memo(() => {
  const navigate = useNavigate();

  const handleLogoClick = useCallback(() => {
    void navigate('/');
  }, [navigate]);

  const { isExpanded } = useSideBar();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Memoize styles based on isExpanded
  const sidebarStyles = useMemo(
    () => ({
      as: 'aside' as const,
      flexDir: 'column' as const,
      alignSelf: 'stretch' as const,
      css: {
        width: isExpanded ? '204px' : '54px',
        flexShrink: '0',
      },
      bg: 'body.50' as const,
      boxShadow: '2px 0 10px 0 rgba(236, 238, 241, 0.70)',
      position: 'sticky' as const,
      top: 0,
    }),
    [isExpanded]
  );

  const stackStyles = useMemo(
    () => ({
      display: 'inline-flex' as const,
      flexDirection: 'column' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'flex-start' as const,
      gap: '12px' as const,
      height: 'calc(100vh - 100px)' as const,
      pb: '3' as const,
      overflowY: 'auto' as const,
      flexShrink: '0' as const,
      '::-webkit-scrollbar': { display: 'none' },
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }),
    [isExpanded]
  );

  // Render mobile hamburger menu for tablet and below
  if (isMobile) {
    return <HamburgerHeaderMenu />;
  }

  // Render desktop sidebar
  return (
    <Flex {...sidebarStyles}>
      <Stack display="inline-flex" gap="8px" mt="28px" alignItems="center">
        <BrandLogo onClick={handleLogoClick} isExpanded={isExpanded} />
      </Stack>

      <Header />
      <Stack {...stackStyles}>
        <Flex display="flex" flexDirection="column" gap="48px" w="full">
          <OnlineUser isExpanded={isExpanded} />
          <Menu isExpanded={isExpanded} />
          <SystemMenu isExpanded={isExpanded} />
        </Flex>
        <Footer isExpanded={isExpanded} />
      </Stack>
    </Flex>
  );
});

SideBar.displayName = 'SideBar';
