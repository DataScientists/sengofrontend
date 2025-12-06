import { Icon } from "@chakra-ui/react";
import { Category, Chart, Messages2, MoneyRecive } from "iconsax-reactjs";

import type { SidebarMenuItem } from "../types";

export const useMenuStructure = () => {
  const menuItems: SidebarMenuItem[] = [
    {
      icon: (type) => renderIcon(type, Category),
      url: "/dashboard",
      label: "Dashboard",
      id: "dashboard",
      type: "itemGroup",
      children: [],
    },

    {
      icon: (type) => renderIcon(type, MoneyRecive),
      url: "/profiles",
      label: "profiles",
      id: "profiles",
      type: "itemGroup",
      children: [],
    },
    {
      icon: (type) => renderIcon(type, Messages2),
      url: "/profile-entries",
      label: "Profile Entries",
      id: "profile-entries",
      type: "itemGroup",
      children: [],
    },
    {
      icon: (type) => renderIcon(type, Chart),
      url: "/reports",
      label: "Reports",
      id: "reports",
      type: "itemGroup",
      children: [],
    },
    {
      icon: (type) => renderIcon(type, Chart), // Using Chart icon for now, can be changed
      url: "/job-history",
      label: "Job History",
      id: "job-history",
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
