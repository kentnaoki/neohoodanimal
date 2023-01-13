import video from "../../img/PV_01.mp4";
import { Navigation } from "../Navigation/Navigation";
import { MintStyle } from "./MintStyle";

export const Mint = (props) => {
  return (
    <MintStyle>
      <div>
        <Navigation
          handleLanguage={props.handleLanguage}
          language={props.language}
        ></Navigation>
        <div>
          <h1>{props.language.mint.title}</h1>
          <div className="content">
            <div className="mint-image">
              <video controls className="video">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="mint-context">
              <div className="text">
                <h3>{props.language.mint.header}</h3>
              </div>
              <div className="sold-amount">????/3000</div>
              <div className="mint-section">
                <div className="mint-eth">
                  <button>{props.language.mint.button1}</button>
                </div>
                <div className="mint-credit">
                  <button>{props.language.mint.button2}</button>
                </div>
              </div>
              <div className="whitelist-mint">
                - Whitelist mint : ???, ?E ??? max per wallet & tx
              </div>
              <div className="public-mint">
                - Public mint : ???, ?E ??? max per wallet & tx
              </div>
            </div>
          </div>
        </div>
      </div>
    </MintStyle>
  );
};
