export interface SidebarMenuItem {
  label: string;
  id: string;
  url?: string;
  matchUrls?: string[];
  type: 'item' | 'itemGroup';
  icon?: (type: 'active' | 'inactive') => React.ReactNode;
  onClick?: () => void;
  children?: SidebarMenuItem[];
}
