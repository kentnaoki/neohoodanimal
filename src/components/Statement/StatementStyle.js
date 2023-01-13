import styled from "styled-components";

export const StatementStyle = styled.div`
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
