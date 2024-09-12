import React from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import { ModalTextInputWrapper } from "../styles/modal_text_input_wrapper";
import ModalInputDate from "./common/modal_input_date";

//굿즈 추가, 수정 모달창
export default function GoodsModal() {
  const inputChange = () => {};
  return (
    <ModalWrapper>
      <Modal>
        <ModalCloseButton close="" />
        <div>
          <ModalInputText
            label="굿즈명"
            value=""
            inputChange={inputChange}
            placeholder="굿즈명 입력"
          />
          <ModalInputText
            label="굿즈 금액"
            value=""
            inputChange={inputChange}
            placeholder="굿즈 금액 입력"
          />
          <ModalInputText
            label="뱃지 해금 개수"
            value=""
            inputChange={inputChange}
            placeholder="뱃지 해금 개수 입력"
          />
          <ModalInputText
            label="색상"
            value=""
            inputChange={inputChange}
            placeholder="#빨강"
          />
          <ModalInputText
            label="사이즈"
            value=""
            inputChange={inputChange}
            placeholder="#s"
          />
          <ModalInputText
            label="발송지"
            value=""
            inputChange={inputChange}
            placeholder="발송지 입력"
          />
          <ModalTextInputWrapper>
            <label htmlFor="">지역</label>
            <input type="text" />
          </ModalTextInputWrapper>
          <ModalInputDate
            label="상품출시일"
            value=""
            inputChange={inputChange}
          />
          <ModalInputDate
            label="예상 배송일"
            value=""
            inputChange={inputChange}
          />
          <ModalTextInputWrapper>
            <label htmlFor="">이미지 등록</label>
            <input type="text" />
          </ModalTextInputWrapper>
        </div>
        <ButtonBox>
          <button className="no">취소</button>
          <button className="yes">추가</button>
        </ButtonBox>
      </Modal>
    </ModalWrapper>
  );
}

const Modal = styled.div`
  width: 710px;
  height: 950px;
  margin: 10px auto;
  background: ${({ theme }) => theme.colors.grayscale[7]};
  padding: 10px 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

/*버튼 공통 컴포넌트로 만들수 있으면 만들기 */
const ButtonBox = styled.div`
  text-align: right;

  .yes {
    background: ${({ theme }) => theme.colors.primary[4]};
    color: ${({ theme }) => theme.colors.grayscale[7]};
  }

  .no {
    color: ${({ theme }) => theme.colors.primary[4]};
    margin-right: 25px;
  }

  button {
    background: none;
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.primary[4]};
    width: 100px;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
  }
`;
