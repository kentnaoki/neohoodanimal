import styled from "styled-components";
import { About } from "./About";
import { Navigation } from "./Navigation";
import { Roadmap } from "./Roadmap";
import { Statement } from "./Statement";
import { Partner } from "./Partner";
import { TopPage } from "./TopPage";
import { SpecialThanks } from "./SpecialThanks";
import { Footer } from "./Footer";

const ContentStyle = styled.div`
  margin: 0 auto;
  h2 {
    margin-top: 0;
    margin-bottom: 50px;
  }
`;

export const Home = (props) => {
  return (
    <div>
      <Navigation
        handleLanguage={props.handleLanguage}
        language={props.language}
      ></Navigation>
      <TopPage></TopPage>
      <ContentStyle>
        <About language={props.language}></About>
        <Statement language={props.language}></Statement>
        <Roadmap language={props.language}></Roadmap>
        <SpecialThanks language={props.language}></SpecialThanks>
        <Partner></Partner>
      </ContentStyle>
      <Footer></Footer>
    </div>
  );
};
