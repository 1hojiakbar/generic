import React from "react";
import { Outlet } from "react-router-dom";
import { Container, OutletWrapper, SidebarWrapper } from "./style";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SidebarWrapper>
        <h1>Sidebar</h1>
      </SidebarWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  );
};

export default Sidebar;
