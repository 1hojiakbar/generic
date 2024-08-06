import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;

export const SidebarWrapper = styled.div`
  ${flex}
  overflow-y: scroll;
  flex-direction: column;
  background: var(--bgColor);
  min-height: calc(100vh - 80px);
  border-right: 1px solid var(--secondary);
`;

export const OutletWrapper = styled.div`
  ${flex}
  overflow-y: scroll;
  flex-direction: column;
  padding: 20px 0 0 20px;
  background: var(--bgColor);
  min-height: calc(100vh - 80px);
`;
