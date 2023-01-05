import styled from "styled-components";
import twitter from "../img/twitter.png";

const SpecialThanksStyle = styled.div`
  background-color: #383838;
  padding-top: 85px;
  padding-bottom: 85px;
  .member {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 25% 25% 25% 25%;
    margin: auto;
    max-width: 940px;
    row-gap: 20px;
  }
  .member-name {
    font-size: 20px;
    height: 30px;
  }
  .twitter-image-container {
    margin: 10px auto;
  }
  .twitter-image-container img {
    height: 40px;
    border-radius: 30px;
  }
`;

export const SpecialThanks = () => {
  const memberContent = [
    {
      id: 0,
      name: "彦摩呂",
      twitter: "https://twitter.com/hikomaro_mg",
    },
    {
      id: 1,
      name: "脇田悠哉",
      twitter: "https://twitter.com/ohtaproinfo",
    },
    {
      id: 2,
      name: "あさぎ",
      twitter: "https://twitter.com/lmvle",
    },
    {
      id: 3,
      name: "秋山佳菜",
      twitter: "",
    },
    {
      id: 4,
      name: "MDゼウス",
      twitter: "",
    },
    {
      id: 5,
      name: "MDマンチェスター",
      twitter: "",
    },
    {
      id: 6,
      name: "KOC",
      twitter: "",
    },
    {
      id: 7,
      name: "マツゴリ",
      twitter: "https://twitter.com/mm0218_1",
    },
  ];

  return (
    <SpecialThanksStyle>
      <div className="special-thanks">
        <h2>SPECIAL THANKS</h2>
        <div className="member">
          {memberContent.map((e) => {
            return (
              <div className="member-each" id={e.id}>
                <div className="member-name">{e.name}</div>
                <div className="twitter-image-container">
                  {e.twitter !== "" && (
                    <a href={e.twitter} target="_blank" rel="noreferrer">
                      <img src={twitter} alt="twitter"></img>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SpecialThanksStyle>
  );
};
