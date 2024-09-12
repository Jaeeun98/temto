import React from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import { ModalTextInputWrapper } from "../styles/modal_text_input_wrapper";
import ModalInputDate from "./common/modal_input_date";
import ModalArea from "./common/modal_area";
import ModalImgAdd from "./common/modal_img_add";

//관광지 추가, 수정 모달창
export default function TourModal() {
  const inputChange = () => {};
  return (
    <ModalWrapper>
      <Modal>
        <ModalCloseButton close="" />
        <div>
          <ModalInputText
            label="관광지명"
            value=""
            inputChange={inputChange}
            placeholder="관광지명 입력"
          />
          <ModalInputText
            label="주소"
            value=""
            inputChange={inputChange}
            placeholder="주소 입력"
          />
          <ModalArea label="관광지 지역" value="" inputChange={inputChange} />
          <ModalInputText
            label="관광지 위도"
            value=""
            inputChange={inputChange}
            placeholder="관광지 위도"
          />
          <ModalInputText
            label="관광지 경도"
            value=""
            inputChange={inputChange}
            placeholder="관광지 경도"
          />
          <ModalInputText
            label="링크"
            value=""
            inputChange={inputChange}
            placeholder="링크 입력"
          />
          <ModalInputText
            label="연락처"
            value=""
            inputChange={inputChange}
            placeholder="연락처 입력"
          />
          <ModalTextInputWrapper>
            <label htmlFor="">뱃지 분류코드</label>
            <select name="" id=""></select>
          </ModalTextInputWrapper>

          <ModalImgAdd value="" inputChange={inputChange} />
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
  padding: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

/*버튼 공통 컴포넌트로 만들수 있으면 만들기 */
const ButtonBox = styled.div`
  text-align: right;
  margin-top: 21px;

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
