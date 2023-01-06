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
  @media screen and (max-width: 959px) {
    .member {
      grid-template-rows: 33% 33% 33%;
      grid-template-columns: 33% 33% 33%;
    }
  }
  @media screen and (max-width: 649px) {
    .member {
      grid-template-rows: 25% 25% 25% 25%;
      grid-template-columns: 50% 50%;
    }
  }
  @media screen and (max-width: 480px) {
    .member {
      display: block;
    }
    .member-each {
      display: flex;
      width: 80vw;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
    .member-name {
      flex: 1;
    }
  }
  .member-name {
    font-size: 20px;
    height: 30px;
  }
  .twitter-image-container {
    margin: 5px auto;
    width: 40px;
    height: 40px;
  }
  .twitter-image-container img {
    height: 40px;
    border-radius: 30px;
  }
`;

export const SpecialThanksJP = () => {
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
      twitter: null,
    },
    {
      id: 4,
      name: "MDゼウス",
      twitter: null,
    },
    {
      id: 5,
      name: "MDマンチェスター",
      twitter: null,
    },
    {
      id: 6,
      name: "KOC",
      twitter: null,
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
              <div className="member-each" key={e.id}>
                <div className="member-name">{e.name}</div>
                <div className="twitter-image-container">
                  {e.twitter !== null && (
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
