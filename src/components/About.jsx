import styled from "styled-components";
import cat from "../img/cat.jpg";

const AboutStyle = styled.div`
  padding-top: 65px;
  padding-bottom: 65px;

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
  }
  @media screen and (max-width: 759px) {
    .about-content {
      display: block;
    }
    .about-text {
      margin: 50px auto;
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
            <img src={cat} alt="cat" />
          </div>
          <div className="about-text">説明文</div>
        </div>
      </div>
    </AboutStyle>
  );
};
