import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background: #ccc;
  display: flex;
  justify-content: space-between;
  // grid-area: header;
  // grid-column: 1/3;
  height: ${({ theme }) => theme.baseMeasure * 7}px;
`;
