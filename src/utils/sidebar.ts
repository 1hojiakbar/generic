import React from "react";
import Generics from "../view/Generics";
import Button from "../components/Button/Button";

export interface SidebarItemType {
  id: number;
  path?: string;
  title: string;
  element?: React.ReactNode | React.FC;
  group?: boolean;
  sidebar: boolean;
  navbar?: boolean;
}

type SidebarType = SidebarItemType[];

const sidebar: SidebarType = [
  {
    id: 1,
    title: "Design",
    path: "/design",
    element: Generics,
    sidebar: false,
  },
  {
    id: 2,
    title: "Components",
    path: "/components/",
    element: Generics,
    sidebar: false,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    element: Generics,
    sidebar: false,
  },
  {
    id: 4,
    path: "/components/overview",
    title: "Components Overview",
    element: Generics,
    sidebar: true,
  },
  {
    id: 5,
    title: "Basic",
    group: true,
    sidebar: true,
  },
  {
    id: 6,
    path: "/components/button",
    title: "Button",
    element: Button,
    sidebar: true,
  },
  {
    id: 7,
    path: "/components/typography",
    title: "Typography",
    element: Generics,
    sidebar: true,
  },
  {
    id: 8,
    title: "Layout",
    group: true,
    sidebar: true,
  },
  {
    id: 9,
    path: "/components/divider",
    title: "Divider",
    element: Generics,
    sidebar: true,
  },
  {
    id: 10,
    path: "/components/flex",
    title: "Flex",
    element: Generics,
    sidebar: true,
  },
  {
    id: 11,
    path: "/components/grid",
    title: "Grid",
    element: Generics,
    sidebar: true,
  },

  {
    id: 12,
    title: "Navigation",
    group: true,
    sidebar: true,
  },
  {
    id: 13,
    title: "Anchor",
    path: "/components/anchor",
    element: Generics,
    sidebar: true,
  },
  {
    id: 14,
    title: "Breadcrumb",
    path: "/components/breadcrumb",
    element: Generics,
    sidebar: true,
  },
  {
    id: 15,
    title: "Dropdown",
    path: "/components/dropdown",
    element: Generics,
    sidebar: true,
  },
  {
    id: 16,
    title: "Data Entry",
    group: true,
    sidebar: true,
  },
  {
    id: 17,
    title: "AutoComplete",
    path: "/components/auto-complete",
    element: Generics,
    sidebar: true,
  },
  {
    id: 18,
    title: "Cascader",
    path: "/components/cascader",
    element: Generics,
    sidebar: true,
  },
  {
    id: 19,
    title: "Checkbox",
    path: "/components/checkbox",
    element: Generics,
    sidebar: true,
  },
];

export default sidebar;
