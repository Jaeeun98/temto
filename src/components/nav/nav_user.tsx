import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { userAreaCode } from "../../api/login";

export default function NavUser() {
  const { data: areaName } = useQuery("getUserAreaName", userAreaCode);

  useEffect(() => {}, [areaName]);

  if (!areaName) return <div></div>;

  return (
    <Container>
      <ImgContainer>
        <img src="/images/user.png" alt="user_img" />
      </ImgContainer>
      <p>
        <span className="id">{areaName.userAreaName?.split(" ")[1]}관리자</span>{" "}
        님
      </p>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 50px 0;

  p {
    margin-top: 20px;
    width: 100%;

    .id {
      color: ${(props) => props.theme.colors.primary[0]};
      font-weight: 500;
      font-size: 28px;
    }
  }
`;

const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;
