import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import ModalArea from "./common/modal_area";
import ModalImgAdd from "./common/modal_img_add";
import ModalButton from "./common/modal_button";
import { handleAlertModal } from "./common/table";
import { getLocalDetailList, localAdd, localModify } from "../api/local";
import ModalAlert from "./common/modal_alert";

interface Local {
  localItemName: string;
  localItemPrice: string;
  localItemImages: any;
}

interface Props {
  id: string;
  closeModal: any;
  state: "등록" | "수정";
}

//특산품 추가, 수정 모달창
export default function LocalModal({ id, closeModal, state }: Props) {
  const [data, setData] = useState<Local>({
    localItemName: "",
    localItemPrice: "",
    localItemImages: [],
  });

  const { localItemName, localItemPrice, localItemImages } = data;

  const [alertModal, setAlertModal] = useState({
    deleteAlert: false,
  });

  const handleInputCheck = () => {
    if (
      localItemName === "" ||
      localItemPrice === "" ||
      localItemImages.length === 0
    ) {
      alert("데이터를 전부 입력해 주세요.");
      return false;
    }
    return true;
  };

  const handleFormData = () => {
    const formData = new FormData();
    formData.append("localItemName", localItemName);
    formData.append("localItemPrice", localItemPrice);

    // 이미지 파일을 배열로 추가
    for (let i = 0; i < localItemImages.length; i++) {
      formData.append("localItemImages", localItemImages[i]);
    }

    return formData;
  };
  const inputChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    let { name, value } = e.target;

    //이미지 추가
    if (name.lastIndexOf("Images") !== -1) {
      const file = e.target.files[0];
      value = localItemImages ? [...localItemImages, file] : [file];
    }

    if (name === "badgeOpenCount") value = Number(value);
    setData((prev) => ({
      ...(prev || {}),
      [name]: value,
    }));
  };

  //이미지 삭제
  const handleImgDelete = (url: string) => {
    let value = localItemImages.filter((urls: any) => urls !== url);
    setData((prev) => ({
      ...(prev || {}),
      goodsImages: value,
    }));
  };

  const handleCancleAlert = () =>
    handleAlertModal("deleteAlert", setAlertModal);

  //*
  const handleLocalAdd = async () => {
    const inputCheck = handleInputCheck();
    if (!inputCheck) return;

    const formData = handleFormData();

    const result = await localAdd(formData);
    if (result.status === 200) {
      alert("데이터를 등록했습니다.");
      window.location.reload();
    }
  };

  //*
  const handleLocalModify = async () => {
    const inputCheck = handleInputCheck();
    if (!inputCheck) return;

    const formData = handleFormData();
    const result = await localModify(id, formData);
    if (result.status === 200) {
      alert("데이터를 수정했습니다.");
      window.location.reload();
    }
  };

  const handleLocalDetailData = async () => {
    if (id === "") return;
    const result = await getLocalDetailList(id);
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
            label="특산품명"
            value={localItemName}
            name="localItemName"
            placeholder="특산품명 입력"
          />
          <ModalInputText
            label="금액"
            value={localItemPrice}
            name="localItemPrice"
            placeholder="금액 입력"
          />
          <ModalImgAdd
            value={localItemImages}
            name="localItemImages"
            handleImgDelete={handleImgDelete}
          />
        </form>
        <ModalButton
          cancleButton={handleCancleAlert}
          addButton={state === "등록" ? handleLocalAdd : handleLocalModify}
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
  height: 400px;
  margin: 200px auto;
  background: ${({ theme }) => theme.colors.grayscale[7]};
  padding: 30px;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
