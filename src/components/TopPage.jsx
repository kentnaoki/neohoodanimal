import topImage from "../img/18_NEWCOLLECTION.jpg";
import styled from "styled-components";

const TopPageStyle = styled.div`
  img {
    width: 100%;
  }
`;

export const TopPage = () => {
  return (
    <TopPageStyle>
      <div className="image-container">
        <img className="toppage-image" src={topImage} alt="neo hood animal" />
      </div>
    </TopPageStyle>
  );
};
