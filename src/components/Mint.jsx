import styled from "styled-components";

const MintStyle = styled.div`
  h1 {
    margin-top: 0;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Mint = () => {
  return (
    <MintStyle>
      <div>
        <h1>MINT NEO HOOD ANIMALS</h1>
        <div className="content">
          <div className="mint-image">t</div>
          <div className="mint-context">
            <div className="text">
              NEO TOKYO PUNKS use the ERC721A (by Azuki) implementation for our
              minting
            </div>
            <div className="sold">aaa</div>
            <div className="whitelist-mint">
              - Whitelist mint : 3/26 10pm JST, 0.03E 5 max per wallet & tx
            </div>
            <div className="public-mint">
              - Public mint : 3/27 10pm JST, 0.05E 10 max per wallet & tx
            </div>
          </div>
        </div>
      </div>
    </MintStyle>
  );
};
