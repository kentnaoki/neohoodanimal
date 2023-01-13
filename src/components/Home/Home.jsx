import { About } from "../About/About";
import { Navigation } from "../Navigation/Navigation";
import { Roadmap } from "../Roadmap/Roadmap";
import { Statement } from "../Statement/Statement";
import { Partner } from "../Partner/Partner";
import { TopPage } from "../TopPage/TopPage";
import { SpecialThanks } from "../SpecialThanks/SpecialThanks";
import { Footer } from "../Footer/Footer";
import { HomeStyle } from "./HomeStyle";

export const Home = (props) => {
  return (
    <div>
      <Navigation
        handleLanguage={props.handleLanguage}
        language={props.language}
      ></Navigation>
      <TopPage></TopPage>
      <HomeStyle>
        <About language={props.language}></About>
        <Statement language={props.language}></Statement>
        <Roadmap language={props.language}></Roadmap>
        <SpecialThanks language={props.language}></SpecialThanks>
        <Partner></Partner>
      </HomeStyle>
      <Footer></Footer>
    </div>
  );
};
