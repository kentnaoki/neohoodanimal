import { StatementStyle } from "./StatementStyle";

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
