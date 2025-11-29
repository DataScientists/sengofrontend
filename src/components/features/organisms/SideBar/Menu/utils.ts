import { matchPath } from 'react-router';

import type { SidebarMenuItem } from './types';

export function isMenuActive(location: string, menuItem: SidebarMenuItem): boolean {
  if (!menuItem) return false;

  const menuUrlsToCheck = [...(menuItem.matchUrls ?? []), menuItem.url]
    .filter(Boolean)
    .map((item) => item && item.split('?')[0]);

  if (menuUrlsToCheck.length === 0) {
    return false;
  }

  return menuUrlsToCheck.some((menuItemUrl) => {
    if (!menuItemUrl) return false;

    return !!matchPath(
      {
        path: menuItemUrl,
        end: false,
      },
      location
    );
  });
}
