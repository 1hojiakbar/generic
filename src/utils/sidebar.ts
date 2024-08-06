import React from "react";
import Generics from "../view/Generics";

interface SidebarItemType {
  id: number;
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
    children: [
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
    ],
  },
  {
    id: 5,
    title: "Layout",
    group: true,
    children: [
      {
        id: 6,
        path: "/components/divider",
        title: "Divider",
        element: Generics,
      },
    ],
  },
  {
    id: 7,
    title: "Navigation",
    group: true,
    children: [
      {
        id: 8,
        title: "Anchor",
        path: "/components/anchor",
        element: Generics,
      },
    ],
  },
  {
    id: 9,
    title: "Data Entry",
    group: true,
    children: [
      {
        id: 10,
        title: "AutoComplete",
        path: "/components/auto-complete",
        element: Generics,
      },
    ],
  },
];

export default sidebar;
