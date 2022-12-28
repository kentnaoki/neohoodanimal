import styled from "styled-components";
import "./App.css";
import { About } from "./components/About";
import { Navigation } from "./components/Navigation";
import { Roadmap } from "./components/Roadmap";
import { Statement } from "./components/Statement";
import { Team } from "./components/Team";
import { TopPage } from "./components/TopPage";

const AppStyle = styled.div`
  background-color: black;
  color: white;
  font: "Sequel Sans Display Medium";
`;

function App() {
  return (
    <AppStyle>
      <div className="App">
        <Navigation></Navigation>
        <TopPage></TopPage>
        <About></About>
        <Statement></Statement>
        <Roadmap></Roadmap>
        <Team></Team>
      </div>
    </AppStyle>
  );
}

export default App;
