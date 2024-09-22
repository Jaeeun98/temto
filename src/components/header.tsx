import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <img
        onClick={() => navigate("/order")}
        src="/images/header_logo.png"
        alt="temto_logo"
      />
    </Container>
  );
}

const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.grayscale[7]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale[8]};
  height: 80px;
  padding-left: 20px;
  display: flex;
  align-items: center;

  img {
    width: 215px;
    height: 40px;
    cursor: pointer;
  }
`;
