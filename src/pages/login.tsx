import React, { useState } from "react";

import styled from "styled-components";

import Footer from "../components/footer";
import Button from "../styles/button";
import TextInput from "../styles/text_input";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";

interface LoginData {
  adminUserEmail: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<LoginData>({
    adminUserEmail: "",
    password: "",
  });

  const btnDisabled = () => {
    if (loginData.adminUserEmail !== "" && loginData.password !== "")
      return false;
    return true;
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const result = await login(loginData);
    console.log(result);
    if (result.status !== "FAIL") {
      alert("로그인 되었습니다.");
      localStorage.setItem("accessToken", result.data.accessToken);
      navigate("/order");
    } else {
      alert(result.errorMessage);
      setLoginData({ adminUserEmail: "", password: "" });
    }
  };

  return (
    <Container>
      <Content>
        <img src="/images/logo.png" alt="temto_logo" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <TextInput
            onChange={inputChange}
            name="adminUserEmail"
            type="text"
            placeholder="아이디 입력"
            value={loginData.adminUserEmail}
          />
          <TextInput
            name="password"
            type="password"
            placeholder="비밀번호 입력"
            onChange={inputChange}
            value={loginData.password}
          />
          <Button disabled={btnDisabled()}>로그인</Button>
        </form>
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
