import styled from "styled-components";

export const MintStyle = styled.div`
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
  .mint-section button {
    font-size: 20px;
    height: 40px;
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
    .mint-section button {
      margin: 10px auto;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 349px) {
    .video {
      width: 200px;
    }
  }
`;
