import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "./context/ThemeContext";
import { ApiDataProvider } from "./context/ApiContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <GlobalStyle />
          <Wrapper>
            <ApiDataProvider>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </ApiDataProvider>
          </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
