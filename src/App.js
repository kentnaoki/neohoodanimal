import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mint } from "./components/Mint";
import { MintJP } from "./components/MintJP";
import { Home } from "./components/Home";
import { HomeJP } from "./components/HomeJP";

const AppStyle = styled.div`
  background-color: black;
  color: white;
  /* font: "Sequel Sans Display Medium"; */
`;

function App() {
  return (
    <AppStyle>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/mint/`} element={<Mint />} />
            <Route path={`/jp/`} element={<HomeJP />} />
            <Route path={`/jp/mint/`} element={<MintJP />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppStyle>
  );
}

export default App;
