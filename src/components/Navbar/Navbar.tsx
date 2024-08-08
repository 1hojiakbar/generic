import React from "react";
import { NavbarWrapper } from "./style";
import Logo from "./Logo";
import Items from "./Items";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Logo />
      <Items />
    </NavbarWrapper>
  );
};

export default Navbar;
