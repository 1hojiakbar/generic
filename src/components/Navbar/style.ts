import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

const center = css`
  align-items: center;
`;

export const NavbarWrapper = styled.div`
  ${flex}
  ${center}
  justify-content: space-between;
  padding: 0 60px;
  height: 70px;
  min-height: 70px;
  scrollbar-width: none;
  width: 100%;
  min-width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
  background: var(--bgColor);
  border-bottom: 1px solid var(--borderColor);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

export const ItemsWrapper = styled.div`
  ${flex}
  ${center}
  flex-direction: row;
  text-underline-offset: 8px;
  gap: 33px;
  .active {
    color: var(--activeColor);
    text-decoration: 1.2px underline var(--activeColor);
  }
`;
