import styled from "styled-components";
import Ohta from "../img/OhtaPro.png";
import MarkDoor from "../img/MarkDoor.jpg";
import Pines from "../img/PINES.png";

const PartnerStyle = styled.div`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .partner-image {
    height: 150px;
    width: 230px;
    position: relative;
  }
  .partner-image img {
    position: absolute;
    max-width: 230px;
    max-height: 150px;
    height: auto;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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

  return (
    <PartnerStyle>
      <div id="partner">
        <h2>PARTNER</h2>
        <div className="partner-content">
          {partnerContent.map((element) => {
            return (
              <div className="partner-member" key={element.id}>
                <div className="partner-image">
                  <a
                    className="partner-link"
                    href={element.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={element.image} alt={element.name} />
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
