import styled from "styled-components";

export const IconButton = ({ children }) => (
  <IconButtonWrapper>{children}</IconButtonWrapper>
);

const IconButtonWrapper = styled.button`
  background: transparent;
  border: 0;
  border-radius: 50%;
  margin: 0;
  padding: 8px;
`;

// const Button = styled.button`

// `;
