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
  width: 25%;
  overflow-y: auto;
  flex-direction: column;
  background: var(--bgColor);
  border-right: 1px solid var(--secondary);
`;

export const Body = styled.div`
  ${flex}
  width: 75%;
  overflow-y: hidden;
  flex-direction: column;
  background: var(--bgColor);
  padding: 14px 0 0 14px;
`;

export const OutletWrapper = styled.div`
  border: 1.5px solid teal;
  overflow-y: scroll;
  height: 100%;
  background-color: transparent;
`;
