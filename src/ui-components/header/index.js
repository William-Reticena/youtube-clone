import styled from "styled-components";

export const Header = styled.header`
  background: #ccc;
  // grid-area: header;
  // grid-column: 1/3;
  height: ${({ theme }) => theme.baseMeasure * 7}px;
`;
