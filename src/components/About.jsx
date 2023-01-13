import styled from "styled-components";
import bird from "../img/bird.jpg";

const AboutStyle = styled.div`
  padding-top: 85px;
  padding-bottom: 85px;
  .header2 {
    margin-bottom: 25px;
  }
  .about-content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 940px;
    margin: 0 auto;
  }
  .about-image-container {
    flex: 1;
  }
  .about-text {
    flex: 1;
    padding: 10px;
  }
  .p1 {
    margin-bottom: 50px;
  }
  img {
    width: 400px;
  }
  @media screen and (max-width: 959px) {
    .about-content {
      margin: 0 50px;
    }
    img {
      width: 350px;
    }
    .p1,
    .p2 {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  @media screen and (max-width: 759px) {
    .about-content {
      display: block;
    }
    .about-text {
      margin: 50px auto;
    }
    .p1,
    .p2 {
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media screen and (max-width: 480px) {
    padding-top: 10px;
    img {
      width: 70vw;
    }
  }
`;

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
