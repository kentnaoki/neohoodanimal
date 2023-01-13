import Ohta from "../../img/OhtaPro.png";
import MarkDoor from "../../img/MarkDoor.jpg";
import Pines from "../../img/PINES.png";
import { PartnerStyle } from "./PartnerStyle";

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
