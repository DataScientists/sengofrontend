import { useLocation } from 'react-router';

import { MenuGroup } from './MenuGroup';
import { SingleItem } from './SingleItem';
import type { SidebarMenuItem } from './types';
import { isMenuActive } from './utils';

interface Props {
  menuItem: SidebarMenuItem;
  isExpanded: boolean;
}

export const MenuItem: React.FC<Props> = ({ menuItem, isExpanded }) => {
  const location = useLocation();
  const isActive = isMenuActive(location.pathname, menuItem);

  switch (menuItem.type) {
    case 'item':
      return <SingleItem menuItem={menuItem} isExpanded={isExpanded} isActive={isActive} />;
    case 'itemGroup':
      return <MenuGroup menuItem={menuItem} isExpanded={isExpanded} />;
  }
};
