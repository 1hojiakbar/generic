import React from "react";
import { Outlet } from "react-router-dom";
import { Body, Container, Main, OutletWrapper, SidebarWrapper } from "./style";
import Navbar from "../Navbar/Navbar";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <SidebarWrapper>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
          <h1>Sidebar</h1>
        </SidebarWrapper>
        <Body>
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        </Body>
      </Main>
    </Container>
  );
};

export default Sidebar;
