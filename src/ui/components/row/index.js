import styled from "styled-components";

export const Row = styled.div.attrs(props => {
  if (props.fullwidth) props.width = '100%'; //fazer ternário dps
})`
  // display: flex;
  // flex-direction: column;
  height: ${({ xs }) => xs?.height || 'auto'};
  // width: ${props => props.xs?.width || props.width || 'auto'};
`;
