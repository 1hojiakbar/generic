import React from "react";
import Generics from "../view/Generics";

interface NavbarItemType {
  id: number;
  title: string;
  path: string;
  sidebar: boolean;
  element: React.FC;
}

const navbar: NavbarItemType[] = [
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
    path: "/components/overview",
    element: Generics,
    sidebar: true,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    element: Generics,
    sidebar: false,
  },
];

export default navbar;
