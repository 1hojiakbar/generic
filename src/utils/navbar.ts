import React from "react";
import Generics from "../view/Generics";

interface NavbarItemType {
  id: number;
  title: string;
  path: string;
  element: React.FC;
}

const navbar: NavbarItemType[] = [
  {
    id: 1,
    title: "Design",
    path: "/design",
    element: Generics,
  },
  {
    id: 2,
    title: "Components",
    path: "/components/overview",
    element: Generics,
  },
  {
    id: 2,
    title: "Blog",
    path: "/blog",
    element: Generics,
  },
];

export default navbar;
