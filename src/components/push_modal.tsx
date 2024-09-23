import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import ModalButton from "./common/modal_button";
import { ModalTextInputWrapper } from "../styles/modal_text_input_wrapper";
import { addPush, getDetailPushData } from "../api/push";
import { handleAlertModal } from "./common/table";
import ModalAlert from "./common/modal_alert";

interface Props {
  id: string;
  closeModal: any;
  state: string;
}

//푸시 상세 보기 & 등록 모달창
export default function PushModal({ id, closeModal, state }: Props) {
  const [data, setData] = useState({
    pushTitle: "",
    pushContent: "",
  });

  const { pushContent, pushTitle } = data;

  const [alertModal, setAlertModal] = useState({
    deleteAlert: false,
  });

  const inputChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    let { name, value } = e.target;

    setData((prev) => ({
      ...(prev || {}),
      [name]: value,
    }));
  };

  const handleCancleAlert = () =>
    handleAlertModal("deleteAlert", setAlertModal);

  const handleInputCheck = () => {
    if (pushTitle === "" || pushContent === "") {
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
    if (result.status === "FAIL") {
      alert(result.errorMessage);
    } else {
      alert("데이터를 등록했습니다.");
      window.location.reload();
    }
  };

  const handleLocalDetailData = async () => {
    if (id === "") return;
    const result = await getDetailPushData(id);
    setData(result);
  };

  useEffect(() => {
    state === "수정" && handleLocalDetailData();
  }, []);

  return (
    <ModalWrapper>
      <Modal>
        <ModalCloseButton close={closeModal} />
        <form onChange={inputChange}>
          <ModalInputText
            label="제목"
            name="pushTitle"
            value={data?.pushTitle}
            placeholder="제목 입력"
            disabled={state === "수정" ? true : false}
          />
          <ModalTextInputWrapper>
            <label>내용</label>
            <textarea
              name="pushContent"
              disabled={state === "수정" ? true : false}
              value={data?.pushContent}
            >
              {data?.pushContent}
            </textarea>
          </ModalTextInputWrapper>
        </form>
        {state !== "수정" && (
          <ModalButton
            cancleButton={handleCancleAlert}
            addButton={handlePushAdd}
            state={"등록"}
          />
        )}
      </Modal>
      {alertModal.deleteAlert && (
        <ModalAlert
          close={handleCancleAlert}
          api={closeModal}
          text={`작성 중인 글이 있습니다. 취소하시겠습니까?`}
        />
      )}
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
