import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    color: ${({ theme }) => theme.color}; 
    margin: 0;
  }

  body {
    height: 100vh;
  }
`;
