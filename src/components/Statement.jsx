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

export const Statement = (props) => {
  return (
    <StatementStyle>
      <div id="statement" className="statement-content">
        <h2>{props.language.statement.title}</h2>
        <h3>{props.language.statement.header}</h3>
        <p>{props.language.statement.p}</p>
      </div>
    </StatementStyle>
  );
};
