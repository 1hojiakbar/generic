import React from "react";
import { Outlet } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Sidebar</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
