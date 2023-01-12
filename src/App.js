import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import metadata from "./metadata.json";
import { Mint } from "./components/Mint";
import { MintJP } from "./components/MintJP";
import { Home } from "./components/Home";
import { HomeJP } from "./components/HomeJP";

const AppStyle = styled.div`
  background-color: black;
  color: white;
  /* font: "Sequel Sans Display Medium"; */
`;

const data = metadata.data.info;

function App() {
  return (
    <HelmetProvider>
      <AppStyle>
        <div className="App">
          <Helmet
            title="NEO HOOD ANIMAL"
            meta={[
              { property: "og:url", content: data.url },
              { property: "og:type", content: "website" },
              { property: "og:titel", content: "NEO HOOD ANIMAL" },
              { property: "og:image", content: data.opgImg },
              {
                property: "og:description",
                content: data.description,
              },
            ]}
          />
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
    </HelmetProvider>
  );
}

export default App;
