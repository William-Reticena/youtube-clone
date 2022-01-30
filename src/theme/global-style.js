import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    color: ${props => props.theme.color}; 
    margin: 0;
  }
`;