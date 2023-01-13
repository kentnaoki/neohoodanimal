import twitter from "../../img/twitter.png";
import { SpecialThanksStyle } from "./SpecialThanksStyle";

export const SpecialThanks = (props) => {
  return (
    <SpecialThanksStyle>
      <div className="special-thanks">
        <h2>{props.language.specialThanks.title}</h2>
        <div className="member">
          {props.language.specialThanks.content.map((e) => {
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
