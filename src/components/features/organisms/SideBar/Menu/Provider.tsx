import { useHover } from '@shared/hooks';
import { createProvider } from '@shared/react/createProvider';
import { useCallback, useState } from 'react';

import type { SidebarMenuItem } from './types';
import { isMenuActive } from './utils';

type ContextProps = {
  isMenuExpanded: boolean;
  isHovering: boolean;
  ref: React.ForwardedRef<HTMLDivElement>;
  toggleMenu: () => void;
  menuItem: SidebarMenuItem;
  isActive: boolean;
};
type Props = {
  menuItem: SidebarMenuItem;
};

const useValue = (props: Props): ContextProps => {
  const { menuItem } = props;
  const { ref, isHovering } = useHover<HTMLDivElement>();
  const hasSubmenuActive = menuItem?.children?.some((item) =>
    isMenuActive(location.pathname, item)
  );
  const [isMenuExpanded, setIsExpanded] = useState<boolean>(!!hasSubmenuActive);
  const isActive = isMenuActive(location.pathname, menuItem) && !hasSubmenuActive;
  const toggleMenu = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return {
    ref,
    isHovering,
    isMenuExpanded,
    toggleMenu,
    menuItem,
    isActive,
  };
};

useValue.__PROVIDER__ = 'src/components/features/SideBar/Menu/provider.tsx';
export const { Provider: MenuGroupProvider, useContext: useMenuGroupContext } =
  createProvider(useValue);
