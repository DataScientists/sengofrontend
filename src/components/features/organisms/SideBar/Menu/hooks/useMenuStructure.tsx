import { Icon } from '@chakra-ui/react';
import {
  DashboardBoldIcon,
  DashboardOutlineIcon,
  DisputeBoldIcon,
  DisputeOutlineIcon,
  PaymentBoldIcon,
  PaymentOutlineIcon,
  RefundBoldIcon,
  RefundOutlineIcon,
  ReportBoldIcon,
  ReportOutlineIcon,
} from '@components/ui/atoms';

import type { SidebarMenuItem } from '../types';

export const useMenuStructure = () => {
  const menuItems: SidebarMenuItem[] = [
    {
      icon: (type) => renderIcon(type, <DashboardBoldIcon />, <DashboardOutlineIcon />),
      url: '/',
      label: 'Dashboard',
      id: 'dashboard',
      type: 'itemGroup',
      children: [
        {
          url: '/profile-entries',
          label: 'Profile Entries',
          id: 'profile-entries',
          type: 'item',
        },
      ],
    },
    {
      icon: (type) => renderIcon(type, <PaymentBoldIcon />, <PaymentOutlineIcon />),
      url: '/payments',
      label: 'Payments',
      id: 'payments',
      type: 'itemGroup',
      children: [
        {
          url: '/payments/pay-links',
          label: 'Pay Links',
          id: 'pay-links',
          type: 'item',
        },
        {
          url: '/payments/subscriptions',
          label: 'Subscriptions',
          id: 'subscriptions',
          type: 'item',
        },
        {
          url: '/payments/checkouts',
          label: 'Checkouts',
          id: 'checkouts',
          type: 'item',
        },
        {
          url: '/payments/mobile-app',
          label: 'Mobile App',
          id: 'mobile-app',
          type: 'item',
        },
      ],
    },
    {
      icon: (type) => renderIcon(type, <RefundBoldIcon />, <RefundOutlineIcon />),
      url: '/refunds',
      label: 'Refunds',
      id: 'refunds',
      type: 'itemGroup',
      children: [],
    },
    {
      icon: (type) => renderIcon(type, <DisputeBoldIcon />, <DisputeOutlineIcon />),
      url: '/disputes',
      label: 'Disputes',
      id: 'disputes',
      type: 'itemGroup',
      children: [],
    },
    {
      icon: (type) => renderIcon(type, <ReportBoldIcon />, <ReportOutlineIcon />),
      url: '/reports',
      label: 'Reports',
      id: 'reports',
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
