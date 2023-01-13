import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mint } from "./components/Mint";
import { Home } from "./components/Home";
import { useState } from "react";
import textJson from "./components/text.json";

const AppStyle = styled.div`
  background-color: black;
  color: white;
  /* font: "Sequel Sans Display Medium"; */
`;

function App() {
  const text = textJson.text;
  const [japanese, setJapanese] = useState(false);
  const handleLanguage = () => {
    setJapanese((lang) => !lang);
  };
  return (
    <AppStyle>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleLanguage={handleLanguage}
                  language={japanese ? text.jp : text.en}
                />
              }
            />
            <Route
              path={`/mint/`}
              element={
                <Mint
                  handleLanguage={handleLanguage}
                  language={japanese ? text.jp : text.en}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AppStyle>
  );
}

export default App;
