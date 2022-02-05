import styled from "styled-components";

export const Button = ({ children }) => (
  <ButtonWrapper>{children}</ButtonWrapper>
);

const ButtonWrapper = styled.button`
  background: #313131;
  border: 0;
  border-radius: 2px;
  height: ${({ theme }) => theme.baseMeasure * 5}px;
  width: ${({ theme }) => theme.baseMeasure * 8}px;
`;
