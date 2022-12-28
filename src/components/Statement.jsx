import styled from "styled-components";

const StatementStyle = styled.div`
  background-color: #383838;
  padding-top: 65px;
  padding-bottom: 65px;
  .statement-content {
    max-width: 940px;
    margin: 0 auto;
  }
  p {
    text-align: justify;
  }
`;

export const Statement = () => {
  return (
    <StatementStyle>
      <div id="statement" className="statement-content">
        <h2>STATEMENT</h2>
        <h3>
          We will update the existing food and beverage industry with Web3.and
          give back to Japan
        </h3>
        <p>
          Hikomaro is Legendary food-reporting comedian. He handles Web 3 for
          the food and beverage industry.NEO HOOD ANIMAL are not just PFPs.This
          NFT offers special benefits when multiple this NFT are collected and
          destroyed And this NFT is also a special food community membership.We
          are going to use Web3 to reform the restaurant industry with our
          wonderful friends with this NFT.
        </p>
      </div>
    </StatementStyle>
  );
};
