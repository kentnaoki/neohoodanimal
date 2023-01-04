import styled from "styled-components";
import { AboutJP } from "./AboutJP";
import { NavigationJP } from "./NavigationJP";
import { RoadmapJP } from "./RoadmapJP";
import { StatementJP } from "./StatementJP";
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

export const HomeJP = () => {
  return (
    <div>
      <NavigationJP></NavigationJP>
      <TopPage></TopPage>
      <ContentStyle>
        <AboutJP></AboutJP>
        <StatementJP></StatementJP>
        <RoadmapJP></RoadmapJP>
        <Partner></Partner>
        <SpecialThanks></SpecialThanks>
      </ContentStyle>
    </div>
  );
};
