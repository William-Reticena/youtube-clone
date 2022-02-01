import styled from "styled-components";

export const Header = styled.header.attrs({
  teste: `${props => props.teste}`
})`
  background: #ccc;
  grid-area: a;
  // grid-column: 2/3;
  // grid-row: 2/3;
  height: ${({ theme }) => theme.baseMeasure * 7}px;
  // width: ${props => props.teste};
`;