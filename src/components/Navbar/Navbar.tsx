import React from "react";
import { Outlet } from "react-router-dom";
import { Body, Container, NavbarWrapper } from "./style";

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavbarWrapper>
        <div>
          <h1 className="text-primary font-semibold text-[28px]">Generic</h1>
        </div>
      </NavbarWrapper>
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
};

export default Navbar;
