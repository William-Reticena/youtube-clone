import styled from "styled-components";

export const IconButton = ({ children }) => (
  <IconButtonWrapper>{children}</IconButtonWrapper>
);

const IconButtonWrapper = styled.button`
  background: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 8px;
  
  &:active {
    background: #303030;
    outline: 1px solid #fff;
    transition: .1s ease;
  }
`;

// const Button = styled.button`

// `;
