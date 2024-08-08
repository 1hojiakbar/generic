import React from "react";
import { NavbarWrapper } from "./style";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Logo />
    </NavbarWrapper>
  );
};

export default Navbar;
