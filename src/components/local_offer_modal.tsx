import React from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import ModalArea from "./common/modal_area";
import ModalImgAdd from "./common/modal_img_add";
import ModalButton from "./common/modal_button";

//특산품 제공 추가, 수정 모달창
export default function LocalOfferModal() {
  const inputChange = () => {};
  return (
    <ModalWrapper>
      <Modal>
        <ModalCloseButton close="" />
        <div>
          <ModalInputText
            label="특산품명"
            value=""
            inputChange={inputChange}
            placeholder="특산품명 입력"
          />
          <ModalInputText
            label="금액"
            value=""
            inputChange={inputChange}
            placeholder="금액 입력"
          />
          <ModalInputText
            label="뱃지 코드"
            value=""
            inputChange={inputChange}
            placeholder="뱃지코드 입력"
          />
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
