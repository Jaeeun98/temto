import React from "react";

import styled from "styled-components";
import theme from "../styles/theme";

export default function Footer() {
  return (
    <FooterStyled>
      <p>문의하기</p>
      <p>Munamaster9790@gmail.com</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 7%;
  width: 400px;
  color: ${theme.colors.text_gray};

  p {
    margin-top: 20px;
  }
`;
