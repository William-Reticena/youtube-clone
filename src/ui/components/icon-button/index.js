import styled from "styled-components";

export const IconButton = ({ children }) => (
  <IconButtonWrapper>{children}</IconButtonWrapper>
);

const IconButtonWrapper = styled.div`
  border-radius: 50%;
  // box-sizing: border-box;
  padding: ${({ theme }) => theme.baseMeasure}px;
`;
