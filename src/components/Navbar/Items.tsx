import React from "react";
import navbar from "../../utils/navbar";
import { NavLink } from "react-router-dom";
import { ItemsWrapper } from "./style";

const Items: React.FC = () => {
  return (
    <ItemsWrapper>
      {navbar.map((item) => {
        const { id, title, path } = item;
        return (
          <NavLink key={id} to={path} className="font-[500] decoration-0">
            {title}
          </NavLink>
        );
      })}
    </ItemsWrapper>
  );
};

export default Items;
