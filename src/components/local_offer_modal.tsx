import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import ModalButton from "./common/modal_button";
import { handleAlertModal } from "./common/table";
import {
  getLocalOfferDetailList,
  localOfferAdd,
  localOfferModify,
} from "../api/local_offer";
import ModalBadgeCode from "./common/modal_badge_code";
import ModalAlert from "./common/modal_alert";

interface Props {
  id: string;
  closeModal: any;
  state: "등록" | "수정";
}

//특산품 제공 추가, 수정 모달창
export default function LocalOfferModal({ id, closeModal, state }: Props) {
  const [data, setData] = useState({
    giveLocalItemName: "",
    giveLocalItemPrice: "",
    badgeCode: "",
  });

  const { giveLocalItemName, giveLocalItemPrice, badgeCode } = data;

  const [alertModal, setAlertModal] = useState({
    deleteAlert: false,
  });

  const handleInputCheck = () => {
    if (
      giveLocalItemName === "" ||
      badgeCode === "" ||
      giveLocalItemPrice === ""
    ) {
      alert("데이터를 전부 입력해 주세요.");
      return false;
    }
    return true;
  };

  const inputChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    let { name, value } = e.target;

    if (name === "badgeOpenCount") value = Number(value);
    setData((prev) => ({
      ...(prev || {}),
      [name]: value,
    }));
  };

  const handleCancleAlert = () =>
    handleAlertModal("deleteAlert", setAlertModal);

  //*
  const handleLocalOfferAdd = async () => {
    const inputCheck = handleInputCheck();
    if (!inputCheck) return;

    const result = await localOfferAdd(data);

    if (result.status === "FAIL") {
      alert(result.errorMessage);
    } else {
      alert("데이터를 등록했습니다.");
      window.location.reload();
    }
  };

  //*
  const handleLocalOfferModify = async () => {
    const inputCheck = handleInputCheck();
    if (!inputCheck) return;

    const result = await localOfferModify({ ...data, giveLocalItemId: id });

    if (result.status === "FAIL") {
      alert(result.errorMessage);
    } else {
      alert("데이터를 수정했습니다.");
      window.location.reload();
    }
  };

  const handleLocalOfferData = async () => {
    if (id === "") return;
    const result = await getLocalOfferDetailList(id);
    setData(result);
  };

  useEffect(() => {
    state === "수정" && handleLocalOfferData();
  }, []);

  return (
    <ModalWrapper>
      <Modal>
        <ModalCloseButton close={closeModal} />
        <form onChange={inputChange}>
          <ModalInputText
            label="특산품명"
            value={giveLocalItemName}
            name="giveLocalItemName"
            placeholder="특산품명 입력"
          />
          <ModalInputText
            label="금액"
            value={giveLocalItemPrice}
            name="giveLocalItemPrice"
            placeholder="금액 입력"
          />
          <ModalInputText
            label="뱃지 코드"
            value={badgeCode}
            name="badgeCode"
            placeholder="뱃지 코드 입력"
          />
        </form>
        <ModalButton
          cancleButton={handleCancleAlert}
          addButton={
            state === "등록" ? handleLocalOfferAdd : handleLocalOfferModify
          }
          state={state}
        />
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
