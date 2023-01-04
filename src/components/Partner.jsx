import styled from "styled-components";
import cat from "../img/cat.jpg";
import twitter from "../img/twitter.png";

const PartnerStyle = styled.div`
  background-color: #383838;
  padding-top: 85px;
  padding-bottom: 85px;

  .partner-content {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 33% 33% 33%;
    max-width: 940px;
    margin: 0 auto;
  }
  .partner-member {
    margin: 10px auto;
  }
  .member-image img {
    width: 230px;
    height: auto;
  }
  .member-name {
    font-size: 25px;
  }
  .twitter-image img {
    height: 40px;
    border-radius: 30px;
  }
  @media screen and (max-width: 859px) {
    .partner-content {
      display: grid;
      grid-template-rows: 33% 33% 33%;
      grid-template-columns: 50% 50%;
      max-width: 759px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 480px) {
    .partner-content {
      display: block;
    }
  }
`;

export const Partner = () => {
  const partnerContent = [
    {
      id: 0,
      image: cat,
      name: "NIKO24(FOUNDER)",
      twitter: "",
    },
    {
      id: 1,
      image: cat,
      name: "TOMO(MANAGER)",
      twitter: "",
    },
    {
      id: 2,
      image: cat,
      name: "0xSumo(DEV)",
      twitter: "",
    },
    {
      id: 3,
      image: cat,
      name: "SHOWGO(PLANNER)",
      twitter: "",
    },
    {
      id: 4,
      image: cat,
      name: "Ryo(RESEARCHER)",
      twitter: "",
    },
    {
      id: 5,
      image: cat,
      name: "Renox(MANAGER)",
      twitter: "",
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
                <div className="member-image">
                  <img src={element.image} alt={element.name} />
                </div>
                <div className="member-name">{element.name}</div>
                <div className="twitter-image">
                  <a href="#partner">
                    <img src={twitter} alt="twitter" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PartnerStyle>
  );
};
