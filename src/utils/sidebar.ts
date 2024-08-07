import React from "react";
import Generics from "../view/Generics";

export interface SidebarItemType {
  id: number | string;
  path?: string;
  title: string;
  element?: React.FC;
  group?: boolean;
  children?: SidebarItemType[];
  hidden?: boolean;
}

type SidebarType = SidebarItemType[];

const sidebar: SidebarType = [
  {
    id: 1,
    path: "/components/overview",
    title: "Components Overview",
    element: Generics,
  },
  {
    id: 2,
    title: "Basic",
    group: true,
  },
  {
    id: 3,
    path: "/components/button",
    title: "Button",
    element: Generics,
  },
  {
    id: 4,
    path: "/components/typography",
    title: "Typography",
    element: Generics,
  },
  {
    id: 5,
    title: "Layout",
    group: true,
  },
  {
    id: 6,
    path: "/components/divider",
    title: "Divider",
    element: Generics,
  },
  {
    id: 7,
    path: "/components/flex",
    title: "Flex",
    element: Generics,
  },
  {
    id: 8,
    path: "/components/grid",
    title: "Grid",
    element: Generics,
  },

  {
    id: 9,
    title: "Navigation",
    group: true,
  },
  {
    id: 10,
    title: "Anchor",
    path: "/components/anchor",
    element: Generics,
  },
  {
    id: 11,
    title: "Breadcrumb",
    path: "/components/breadcrumb",
    element: Generics,
  },
  {
    id: 12,
    title: "Dropdown",
    path: "/components/dropdown",
    element: Generics,
  },
  {
    id: 13,
    title: "Data Entry",
    group: true,
  },
  {
    id: 14,
    title: "AutoComplete",
    path: "/components/auto-complete",
    element: Generics,
  },
  {
    id: 15,
    title: "Cascader",
    path: "/components/cascader",
    element: Generics,
  },
  {
    id: 16,
    title: "Checkbox",
    path: "/components/checkbox",
    element: Generics,
  },
];

export default sidebar;
