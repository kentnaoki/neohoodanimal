import topImage from "../../img/18_NEWCOLLECTION.jpg";
import { TopPageStyle } from "./TopPageStyle";

export const TopPage = () => {
  return (
    <TopPageStyle>
      <div className="image-container">
        <img className="toppage-image" src={topImage} alt="neo hood animal" />
      </div>
    </TopPageStyle>
  );
};
