import styled from "styled-components";

const FooterStyle = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: solid #383838 1px;
  font-size: 12px;
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <div>Copyright © NEO HOOD ANIMAL</div>
    </FooterStyle>
  );
};
