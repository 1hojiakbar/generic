import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

export const Container = styled.div`
  ${flex}
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
`;

export const Main = styled.div`
  ${flex}
  flex: 1;
  height: calc(100vh - 80px);
`;

export const SidebarWrapper = styled.div`
  ${flex}
  width: 20%;
  overflow-y: auto;
  align-items: center;
  flex-direction: column;
  background: white;
  font-weight: 400;
  min-width: 230px;
  border-right: 1px solid var(--borderColor);
  .active {
    font-weight: 500;
    color: var(--activeColor);
    background-color: var(--activeBgColor);
    user-select: none;
    &:hover {
      background-color: var(--activeBgColor);
    }
  }
`;

export const GroupTitle = styled.h3`
  width: 100%;
  font-size: 16px;
  text-align: left;
  margin-bottom: 2px;
  font-weight: 500;
  padding: 10px 0 0 12px;
  color: var(--secondaryText);
  margin-top: 10px 0 5px 0;
`;

export const Divider = styled.div`
  width: 95%;
  margin: 5px 0 12px 0;
  border-bottom: 1px solid rebeccapurple;
  border-bottom: 0.5px solid var(--borderColor);
`;

export const SidebarItem = styled(NavLink)`
  width: 95%;
  text-align: left;
  padding: 10px 0 10px 12px;
  margin-bottom: 7px;
  border-radius: 8px;
  color: var(--textColor);
  cursor: pointer;
  font-weight: 500;
  background: transparent;
  &:hover {
    user-select: none;
    background: var(--hoverItemBg);
  }
`;

export const Body = styled.div`
  ${flex}
  width: 80%;
  overflow-y: hidden;
  flex-direction: column;
  background: var(--bgColor);
  padding: 10px;
`;

export const OutletWrapper = styled.div`
  border: 1.5px solid teal;
  overflow-y: scroll;
  height: 100%;
  min-height: calc(100vh - 88px);
  background-color: transparent;
`;
