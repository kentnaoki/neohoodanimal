import styled from "styled-components";
import dog from "../img/about_image.jpg";

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

export const AboutJP = () => {
  return (
    <AboutStyle>
      <div id="about">
        <h2>What is NEO HOOD ANIMAL?</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img src={dog} alt="dog" />
          </div>
          <div className="about-text">
            <h2 className="header2">私達の食を取り戻せ</h2>
            <p className="p1">
              6051年、今まで人に捕食され、廃棄され、粗末に扱われてきた動物達の中で声をあげた者達がいた。
              フードを被るハードパンクな動物たちがついに東京で反旗を翻す。
            </p>
            <h2 className="header2">食を改革する</h2>
            <p className="p2">
              全てのNEO HOOD
              ANIMALは全ての人間に問うていきます。食とは何か。その旅が始まりました。
            </p>
          </div>
        </div>
      </div>
    </AboutStyle>
  );
};
