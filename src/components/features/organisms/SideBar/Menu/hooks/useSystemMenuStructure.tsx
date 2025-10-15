import { Icon } from '@chakra-ui/react';
import {
  DeveloperBoldIcon,
  DeveloperOutlineIcon,
  MerchantBoldIcon,
  MerchantOutlineIcon,
  UserBoldIcon,
  UserOutlineIcon,
} from '@components/ui/atoms';

import type { SidebarMenuItem } from '../types';

export const useSystemMenuStructure = (): SidebarMenuItem[] => {
  const menuItems: SidebarMenuItem[] = [
    {
      icon: (type) => renderIcon(type, <UserBoldIcon />, <UserOutlineIcon />),
      label: 'Users',
      id: 'users',
      url: '/system/users',
      type: 'itemGroup',
      children: [],
    },
    {
      icon: (type) => renderIcon(type, <MerchantBoldIcon />, <MerchantOutlineIcon />),
      label: 'Merchants',
      id: 'merchants',
      url: '/system/merchants',
      type: 'itemGroup',
      children: [],
    },
    {
      icon: (type) => renderIcon(type, <DeveloperBoldIcon />, <DeveloperOutlineIcon />),
      label: 'Developers',
      id: 'developers',
      url: '/system/developers',
      type: 'itemGroup',
      children: [],
    },
  ];

  return menuItems;
};

function renderIcon(
  type: 'active' | 'inactive',
  boldIcon: React.ReactNode,
  outlineIcon: React.ReactNode
) {
  return (
    <Icon color="body.dark" size="sm">
      {type === 'active' ? boldIcon : outlineIcon}
    </Icon>
  );
}
