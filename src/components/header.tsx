import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { userAreaCode } from "../api/login";

export default function Header() {
  // const { data: areaName } = useQuery("getUserAreaName", userAreaCode);

  // console.log(areaName);
  const navigate = useNavigate();
  return (
    <Container>
      <img
        onClick={() => navigate("/order")}
        src="/images/header_logo.png"
        alt="temto_logo"
      />
      {/* <h2>{areaName ? areaName : ""}</h2> */}
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
