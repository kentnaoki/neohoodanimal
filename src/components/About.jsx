import styled from "styled-components";
import cat from "../img/test_image.jfif";

const AboutStyle = styled.div`
  .about-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const About = () => {
  return (
    <AboutStyle>
      <div>
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
