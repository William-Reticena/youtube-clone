import styled from "styled-components";

export const NavBar = styled.nav`
  background: #aaa;
  display: flex;
  flex-direction: column;
  // grid-area: navBar;
  // grid-row: 2/4;
  height: 100%;
  width: ${({ theme }) => theme.baseMeasure * 25}px;
`;