import styled from "styled-components";
import Ohta from "../img/OhtaPro.png";
import MarkDoor from "../img/MarkDoor.jpg";
import Pines from "../img/PINES.png";
import twitter from "../img/twitter.png";

const PartnerStyle = styled.div`
  background-color: #383838;
  padding-top: 85px;
  padding-bottom: 85px;

  .partner-content {
    display: flex;
    max-width: 940px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
  .partner-member {
    flex: 1;
  }

  .partner-image img {
    width: 230px;
    height: auto;
  }
  .partner-name {
    font-size: 25px;
  }
  .partner-link {
    color: white;
    font-size: 30px;
    text-decoration: none;
  }
  .partner-link:hover {
    color: red;
  }
  @media screen and (max-width: 950px) {
    .partner-content {
      display: block;
    }
  }
  .special-thanks {
    margin: 75px auto;
  }
  .member {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 25% 25% 25% 25%;
    margin: 0 auto;
    max-width: 940px;
    gap: 20px 0;
  }
  .twitter-image-container img {
    height: 40px;
    border-radius: 30px;
  }
`;

export const Partner = () => {
  const partnerContent = [
    {
      id: 0,
      image: Ohta,
      name: "太田プロダクション",
      website: "https://www.ohtapro.co.jp/",
    },
    {
      id: 1,
      image: MarkDoor,
      name: "Mark Door Inc.",
      website: "https://markdoor.net/",
    },
    {
      id: 2,
      image: Pines,
      name: "PINES",
      website: "https://pines.work/",
    },
  ];

  const memberContent = [
    {
      id: 0,
      name: "彦摩呂",
      twitter: "https://twitter.com/hikomaro_mg",
    },
    {
      id: 1,
      name: "脇田mg",
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
    <PartnerStyle>
      <div id="partner">
        <h2>PARTNER</h2>
        <div className="partner-content">
          {partnerContent.map((element) => {
            return (
              <div className="partner-member" key={element.id}>
                <div className="partner-image">
                  <img src={element.image} alt={element.name} />
                </div>
                <div className="partner-name">{element.name}</div>
                <div className="partner-link-container">
                  <a
                    className="partner-link"
                    href={element.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="special-thanks">
          <h2>Special Thanks</h2>
          <div className="member">
            {memberContent.map((e) => {
              return (
                <div className="member-each" id={e.id}>
                  <div>{e.name}</div>
                  <div className="twitter-image-container">
                    {e.twitter !== "" && (
                      <a href={e.twitter}>
                        <img src={twitter} alt="twitter"></img>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PartnerStyle>
  );
};
