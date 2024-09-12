import React from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import ModalButton from "./common/modal_button";
import { ModalTextInputWrapper } from "../styles/modal_text_input_wrapper";

//푸시 추가, 수정 모달창
export default function PushModal() {
  const inputChange = () => {};
  return (
    <ModalWrapper>
      <Modal>
        <ModalCloseButton close="" />
        <div>
          <ModalInputText
            label="제목"
            value=""
            inputChange={inputChange}
            placeholder="제목 입력"
          />
          <ModalTextInputWrapper>
            <label htmlFor="">내용</label>
            <textarea name="" id="" placeholder="내용 입력"></textarea>
          </ModalTextInputWrapper>
        </div>
        <ModalButton />
      </Modal>
    </ModalWrapper>
  );
}

const Modal = styled.div`
  width: 710px;
  height: 390px;
  margin: 200px auto;
  background: ${({ theme }) => theme.colors.grayscale[7]};
  padding: 30px;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
