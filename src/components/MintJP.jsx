import styled from "styled-components";
import video from "../img/PV_01.mp4";
import { NavigationJP } from "./NavigationJP";

const MintStyle = styled.div`
  min-height: 100vh;
  h1 {
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 50px;
  }
  .video {
    width: 500px;
  }
  .mint-context {
    margin: auto 50px;
  }
  .sold-amount {
    margin: 50px auto;
    font-size: 25px;
  }
  .mint-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px auto;
  }
  button {
    font-size: 20px;
  }
  .whitelist-mint {
    margin: 10px auto;
  }
  .public-mint {
    margin: 10px auto;
  }
  @media screen and (max-width: 1175px) {
    .content {
      display: block;
      margin-left: 100px;
      margin-right: 100px;
      margin-top: 50px;
    }
    .mint-context {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  @media screen and (max-width: 699px) {
    .video {
      width: 350px;
    }
    .content {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 499px) {
    .video {
      width: 300px;
    }
    .mint-section {
      display: block;
    }
    button {
      margin: 10px auto;
    }
  }
  @media screen and (max-width: 349px) {
    .video {
      width: 200px;
    }
  }
`;

export const MintJP = () => {
  return (
    <MintStyle>
      <div>
        <NavigationJP></NavigationJP>

        <div>
          <h1>MINT NEO HOOD ANIMALS</h1>
          <div className="content">
            <div className="mint-image">
              <video controls className="video">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="mint-context">
              <div className="text">
                <h3>NEO HOOD ANIMALはERC721A規格を実装しております</h3>
              </div>
              <div className="sold-amount">????/3000</div>
              <div className="mint-section">
                <div className="mint-eth">
                  <button>mint-仮想通貨</button>
                </div>
                <div className="mint-credit">
                  <button>mint-クレジットカード</button>
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
