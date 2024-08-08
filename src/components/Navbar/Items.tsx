import React from "react";
import navbar from "../../utils/navbar";
import { Item, ItemsWrapper } from "./style";

const Items: React.FC = () => {
  return (
    <ItemsWrapper>
      {navbar.map((item) => {
        const { id, title, path } = item;
        return (
          <Item key={id} to={path}>
            {title}
          </Item>
        );
      })}
    </ItemsWrapper>
  );
};

export default Items;
