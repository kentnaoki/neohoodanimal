import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mint } from "./components/Mint";
import { Home } from "./components/Home";

const AppStyle = styled.div`
  background-color: black;
  color: white;
  font: "Sequel Sans Display Medium";
`;

function App() {
  return (
    <AppStyle>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/mint/`} element={<Mint />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppStyle>
  );
}

export default App;
