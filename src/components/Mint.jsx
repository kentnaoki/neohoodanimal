import styled from "styled-components";
import video from "../img/PV_01.mp4";
import { Navigation } from "./Navigation";

const MintStyle = styled.div`
  h1 {
    margin-top: 50px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video {
    width: 500px;
  }
  .mint-context {
    margin: auto 20px;
  }
  .sold-amount {
    margin: 20px auto;
  }
  .mint-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px auto;
  }
  .whitelist-mint {
    margin: 10px auto;
  }
  .public-mint {
    margin: 10px auto;
  }
`;

export const Mint = () => {
  return (
    <div>
      <Navigation></Navigation>
      <MintStyle>
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
                <h3>
                  NEO HOOD ANIMAL use the ERC721A implementation for our minting
                </h3>
              </div>
              <div className="sold-amount">????/3000</div>
              <div className="mint-section">
                <div className="mint-eth">
                  <button>mint-Cryptocurrency</button>
                </div>
                <div className="mint-credit">
                  <button>mint-Credit card</button>
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
      </MintStyle>
    </div>
  );
};
