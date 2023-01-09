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

export const About = () => {
  return (
    <AboutStyle>
      <div id="about">
        <h2>What is NEO HOOD ANIMAL?</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img src={bird} alt="bird" />
          </div>
          <div className="about-text">
            <h2 className="header2">Get back our food industry</h2>
            <p className="p1">
              In 6015, the animals who have been preyed on, discarded, and
              mistreated by people started to raise thier voice. Hooded
              hard-punk animals finally rised in revolt in Tokyo.
            </p>
            <h2 className="header2">Reform food industry</h2>
            <p className="p2">
              Every NEO HOOD ANIMAL asks the question to human beings. What is
              food? <br></br>The journey has just started.
            </p>
          </div>
        </div>
      </div>
    </AboutStyle>
  );
};
