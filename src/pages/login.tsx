import React from "react";

import styled from "styled-components";
import TextInput from "../styles/common/text_input";
import Button from "../styles/common/button";

import Footer from "../components/footer";

export default function Login() {
  // const [loginData, setLoginData] = useState({});
  return (
    <Container>
      <Content>
        <img src="/images/logo.png" alt="temto_logo" />
        <div>
          <TextInput type="text" placeholder="아이디 입력"></TextInput>
          <TextInput type="text" placeholder="비밀번호 입력"></TextInput>
          <Button disabled={true}>로그인</Button>
        </div>
        <Footer />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  width: 400px;
  text-align: center;

  img {
    margin-bottom: 30px;
  }
  input {
    margin: 10px 0;
  }

  button {
    margin-top: 10px;
  }
`;
