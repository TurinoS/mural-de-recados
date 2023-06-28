import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState"

import light from './style/themes/light'
import dark from './style/themes/dark'

import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {

  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper toggleTheme={toggleTheme}>
          <Routes>

          <Route path="/" element={<Home />} />

          </Routes>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
