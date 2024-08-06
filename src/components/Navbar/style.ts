import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

const center = css`
  align-items: center;
`;

export const Container = styled.div`
  ${flex}
  border: 1px solid red;
  height: max-content;
  width: 100%;
  min-width: 100%;
  min-height: calc(100vh - 80px);
  overflow-y: scroll;
  scrollbar-width: none;
  flex-direction: column;
  background-color: #ffffffff;
`;

export const NavbarWrapper = styled.div`
  ${flex}
  ${center}
  justify-content: space-between;
  padding: 0 60px;
  height: 80px;
  border-bottom: 1px solid var(--secondary);
`;

export const Body = styled.div``;
