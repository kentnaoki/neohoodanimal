import styled from "styled-components";

const StatementStyle = styled.div`
  background-color: #383838;
  padding-top: 85px;
  padding-bottom: 85px;
  .statement-content {
    max-width: 600px;
    margin: 0 auto;
  }
  p {
    text-align: center;
  }
  @media screen and (max-width: 999px) {
    .statement-content {
      margin: auto 50px;
    }
  }
`;

export const Statement = () => {
  return (
    <StatementStyle>
      <div id="statement" className="statement-content">
        <h2>STATEMENT</h2>
        <h3>
          We will update the existing food and beverage industry with Web3 and
          contribute to Japan
        </h3>
        <p>
          Hikomaro is a Legendary food-reporting comedian. He is handling Web 3
          for the food and beverage industry. NEO HOOD ANIMAL are not just PFPs.
          This NFT offers special benefits when multiple NFTs are collected and
          destroyed. This NFT is also a special food community membership. We
          use Web3 to reform the restaurant industry with our wonderful friends
          with this NFT.
        </p>
      </div>
    </StatementStyle>
  );
};
