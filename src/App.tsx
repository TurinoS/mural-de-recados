import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>

        <Route path="/" element={<Home />} />

        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
