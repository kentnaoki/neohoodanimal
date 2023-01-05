import styled from "styled-components";
import { About } from "./About";
import { Navigation } from "./Navigation";
import { Roadmap } from "./Roadmap";
import { Statement } from "./Statement";
import { Partner } from "./Partner";
import { TopPage } from "./TopPage";
import { SpecialThanks } from "./SpecialThanks";

const ContentStyle = styled.div`
  margin: 0 auto;
  h2 {
    margin-top: 0;
    margin-bottom: 50px;
  }
`;

export const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <TopPage></TopPage>
      <ContentStyle>
        <About></About>
        <Statement></Statement>
        <Roadmap></Roadmap>
        <SpecialThanks></SpecialThanks>
        <Partner></Partner>
      </ContentStyle>
    </div>
  );
};
