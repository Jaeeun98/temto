import React, { useState } from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import ModalButton from "./common/modal_button";
import { ModalTextInputWrapper } from "../styles/modal_text_input_wrapper";
import { useQuery } from "react-query";
import { addPush, getDetailPushData } from "../api/push";
import { handleAlertModal } from "./common/table";

interface Props {
  id: string;
  closeModal: any;
}

//푸시 상세 보기 & 등록 모달창
export default function PushModal({ id, closeModal }: Props) {
  const [data, setData] = useState({
    pushTitle: "",
    pushContent: "",
  });

  const { pushContent, pushTitle } = data;

  // const { data } = useQuery("getDetailPushData", () => getDetailPushData(id));

  const [alertModal, setAlertModal] = useState({
    deleteAlert: false,
  });

  const handleCancleAlert = () =>
    handleAlertModal("deleteAlert", setAlertModal);

  const handleInputCheck = () => {
    if (pushTitle === "" && pushContent === "") {
      alert("데이터를 전부 입력해 주세요.");
      return false;
    }
    return true;
  };

  //*
  const handlePushAdd = async () => {
    const inputCheck = handleInputCheck();
    if (!inputCheck) return;

    const result = await addPush(data);
  };

  console.log(data);
  return (
    <ModalWrapper>
      <Modal>
        <ModalCloseButton close={closeModal} />
        <div>
          <ModalInputText
            label="제목"
            value={data?.pushTitle}
            placeholder="제목 입력"
          />
          <ModalTextInputWrapper>
            <label>내용</label>
            <textarea>{data?.pushContent}</textarea>
          </ModalTextInputWrapper>
        </div>
        <ModalButton
          cancleButton={handleCancleAlert}
          addButton={handlePushAdd}
          state={"등록"}
        />{" "}
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
