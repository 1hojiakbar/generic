import React from "react";
import SidebarItems from "./Items";
import Navbar from "../Navbar/Navbar";
import sidebar from "../../utils/sidebar";
import { Outlet } from "react-router-dom";
import { Body, Container, Main, OutletWrapper, SidebarWrapper } from "./style";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <SidebarWrapper>
          {/*  */}
          <div className="w-full py-[25px] bg-white z-50 overflow-y-auto sticky top-0"></div>
          <SidebarItems items={sidebar} />
          <div className="w-full py-[15px] bg-white z-50 overflow-y-auto sticky bottom-0"></div>
          {/*  */}
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
