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
  @media screen and (max-width: 759px) {
    .statement-content {
      margin: auto 50px;
    }
  }
`;

export const StatementJP = () => {
  return (
    <StatementStyle>
      <div id="statement" className="statement-content">
        <h2>STATEMENT</h2>
        <h3>我々は既存の飲食業界をWeb3でアップデートし、日本へ還元します</h3>
        <p>
          彦摩呂は伝説のグルメレポーターです。彼は日本の飲食業界のためにWeb3でアップデートします。NEO
          HOOD
          ANIMALはただのPFPではありません。このNFTは複数枚獲得し、破棄することで素晴らしい特典を受けることが可能です。また、このNFTは特別なフードコミュニティ会員でもあります。このNFTで素晴らしい仲間たちとWeb3を用いて飲食業界を改革していきたいと考えています。
        </p>
      </div>
    </StatementStyle>
  );
};
