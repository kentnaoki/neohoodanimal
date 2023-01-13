import bird from "../../img/bird.jpg";
import { AboutStyle } from "./AboutStyle";

export const About = (props) => {
  return (
    <AboutStyle>
      <div id="about">
        <h2>{props.language.about.title}</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img src={bird} alt="bird" />
          </div>
          <div className="about-text">
            <h2 className="header2">{props.language.about.header1}</h2>
            <p className="p1">{props.language.about.p1}</p>
            <h2 className="header2">{props.language.about.header2}</h2>
            <p className="p2">{props.language.about.p2}</p>
          </div>
        </div>
      </div>
    </AboutStyle>
  );
};
