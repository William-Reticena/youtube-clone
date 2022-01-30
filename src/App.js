import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme'
import Main from './pages/main';

const App = () => {

  console.log('theme', theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};



export default App;
