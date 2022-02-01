import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    color: ${({ theme }) => theme.color}; 
    margin: 0;
  }

  #root {
    height: 100vh;
  }
`;
