import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mint } from "./components/Mint";
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
            <Route path="/ppp/" element={<Home />} />
            <Route path={`/ppp/mint/`} element={<Mint />} />
            <Route path={`/ppp/jp/`} element={<HomeJP />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppStyle>
  );
}

export default App;
