import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme';
import AppRoutes from './routes';

const App = () => {

  console.log('theme', theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path='*' element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};



export default App;
