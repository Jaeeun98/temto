import React from "react";
import styled from "styled-components";

export default function NavUser() {
  return (
    <Container>
      <ImgContainer>
        <img src="/images/user.png" alt="user_img" />
      </ImgContainer>
      <p>
        <span className="id">user</span> 님
      </p>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
  text-align: center;

  p {
    margin-top: 20px;

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
