import React from "react";
import styled from "styled-components";
import { ModalWrapper } from "../../styles/modal_wrapper";
import ModalCloseButton from "./modal_close_button";

interface Props {
  text: string;
  api: any;
  close: any;
}

//알림 창
export default function ModalAlert({ text, api, close }: Props) {
  //api 호출
  const handleApi = () => {
    api();
    close();
  };

  return (
    <ModalWrapper>
      <Alert>
        <ModalCloseButton close={close} />
        <Text> {text}</Text>
        <ResButtonBox>
          <button className="yes" onClick={handleApi}>
            네
          </button>
          <button className="no" onClick={close}>
            아니요
          </button>
        </ResButtonBox>
      </Alert>
    </ModalWrapper>
  );
}

const Alert = styled.div`
  margin: 300px auto;
  padding: 30px;
  width: 360px;
  height: 244px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.grayscale[7]};
  font-size: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  button {
    cursor: pointer;
  }
`;

const Text = styled.p`
  width: 65%;
  text-align: center;
  margin: auto;
  padding: 30px 0;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
`;

const ResButtonBox = styled.div`
  text-align: center;

  .yes {
    background: ${({ theme }) => theme.colors.primary[4]};
    color: ${({ theme }) => theme.colors.grayscale[7]};

    margin-right: 12px;
  }

  .no {
    color: ${({ theme }) => theme.colors.primary[4]};
  }

  button {
    background: none;
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.primary[4]};
    width: 140px;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
  }
`;
