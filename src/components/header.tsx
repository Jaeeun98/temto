import React from "react";

import styled from "styled-components";
import theme from "../styles/theme";

export default function Header() {
  return (
    <Container>
      <img src="/images/header_logo.png" alt="temto_logo" />
    </Container>
  );
}

const Container = styled.header`
  background-color: ${theme.colors.default};
  border-bottom: 1px solid ${theme.colors.line_gray};
  height: 80px;
  padding-left: 20px;
  display: flex;
  align-items: center;

  img {
    width: 215px;
    height: 40px;
  }
`;
