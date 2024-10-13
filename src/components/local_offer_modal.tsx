import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import ModalButton from "./common/modal_button";
import {
  getLocalOfferDetailList,
  localOfferAdd,
  localOfferModify,
} from "../api/local_offer";
import ModalAlert from "./common/modal_alert";
import ModalInputSearch from "./common/modal_input_search";
import { useAlertModal } from "../hooks/useAlertModal";

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
    specialBadgeCodeName: "",
  });

  const { giveLocalItemName, giveLocalItemPrice, specialBadgeCodeName } = data;

  const { alertModal, handleAlertModal } = useAlertModal({
    deleteAlert: false,
  });

  const handleInputCheck = () => {
    if (
      giveLocalItemName === "" ||
      giveLocalItemPrice === "" ||
      specialBadgeCodeName === ""
    ) {
      alert("데이터를 전부 입력해 주세요.");
      return false;
    }
    return true;
  };

  const inputChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    let { name, value, innerText } = e.target;

    if (!name) {
      name = "giveLocalItemName";
      value = innerText;
    }

    setData((prev) => ({
      ...(prev || {}),
      [name]: value,
    }));
  };

  const handleAlertModalCancel = () => handleAlertModal("deleteAlert");

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

    const result = await localOfferModify(id, data);

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
          <ModalInputSearch
            label="특산품명"
            value={giveLocalItemName}
            name="giveLocalItemName"
            placeholder="특산품명 입력"
            handleInputChange={inputChange}
          />
          <ModalInputText
            label="금액"
            value={giveLocalItemPrice}
            name="giveLocalItemPrice"
            placeholder="금액 입력"
          />
          <ModalInputText
            label="스페셜 뱃지 코드"
            value={specialBadgeCodeName}
            name="specialBadgeCodeName"
            placeholder="스페셜 뱃지 코드"
          />
        </form>
        <ModalButton
          cancelButton={handleAlertModalCancel}
          addButton={
            state === "등록" ? handleLocalOfferAdd : handleLocalOfferModify
          }
          state={state}
        />
      </Modal>
      {alertModal.deleteAlert && (
        <ModalAlert
          close={handleAlertModalCancel}
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
