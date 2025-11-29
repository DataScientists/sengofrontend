import { Icon } from "@chakra-ui/react";
import { Profile2User } from "iconsax-reactjs";

import type { SidebarMenuItem } from "../types";

export const useSystemMenuStructure = (): SidebarMenuItem[] => {
  const menuItems: SidebarMenuItem[] = [
    {
      icon: (type) => renderIcon(type, Profile2User),
      label: "Users",
      id: "users",
      url: "/system/users",
      type: "itemGroup",
      children: [],
    },
  ];

  return menuItems;
};

function renderIcon(
  type: "active" | "inactive",
  IconComponent: React.ComponentType<{
    size?: string | number;
    variant?: "Bold" | "Linear" | "Outline" | "Broken" | "Bulk" | "TwoTone";
    color?: string;
  }>,
) {
  const variant = type === "active" ? "Bold" : "Linear";

  return (
    <Icon color="body.dark" size="sm">
      <IconComponent size="20" variant={variant} />
    </Icon>
  );
}
