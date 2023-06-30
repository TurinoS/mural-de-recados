import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Routes>

          <Route path="/" element={<Home />} />

          </Routes>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
