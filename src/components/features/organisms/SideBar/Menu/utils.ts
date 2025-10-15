//TODO: Complete and test this logic

import { matchPath } from 'react-router';

import type { SidebarMenuItem } from './types';

export function isMenuActive(location: string, menuItem: SidebarMenuItem) {
  const menuUrlsToCheck = [...(menuItem.matchUrls ?? []), menuItem.url]
    .filter(Boolean)
    .map((item) => item && item.split('?')[0]);

  if (menuUrlsToCheck.length === 0) {
    return false;
  }

  const activeUrl = getPureUrl(location.split('?')[0]);

  return menuUrlsToCheck.some((menuItemUrl) => {
    return (
      menuItemUrl &&
      !!matchPath(
        {
          path: menuItemUrl,
        },
        activeUrl
      )
    );
  });
}

const getPureUrl = (url: string) => {
  if (url.includes('/dashboard')) {
    return url.split('/dashboard')[1];
  }

  return url;
};
