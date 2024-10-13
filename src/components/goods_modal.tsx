import React, { useEffect, useState } from "react";

import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";
import ModalInputDate from "./common/modal_input_date";
import ModalImgAdd from "./common/modal_img_add";
import ModalButton from "./common/modal_button";
import ModalAlert from "./common/modal_alert";
import { getGoodsDetailList, goodsModify, goodsAdd } from "../api/goods";
import ModalInputNumber from "./common/modal_input_number";
import { GoodsDetail } from "../types/goods";
import { useAlertModal } from "../hooks/useAlertModal";
import { handleApiCall } from "../utils/apiHandler";

interface Props {
  id: string;
  closeModal: any;
  state: "등록" | "수정";
}

//굿즈 추가, 수정 모달창
export default function GoodsModal({ id, closeModal, state }: Props) {
  const dateInit = new Date().toISOString().split("T")[0];

  const [data, setData] = useState<GoodsDetail>({
    goodsName: "",
    goodsPrice: "",
    badgeOpenCount: "",
    goodsColor: "",
    goodsSize: "",
    goodsFrom: "",
    goodsImages: [],
    goodsReleaseDate: dateInit,
    goodsDeliveryDate: dateInit,
  });

  const {
    goodsName,
    goodsPrice,
    badgeOpenCount,
    goodsColor,
    goodsSize,
    goodsFrom,
    goodsImages,
    goodsReleaseDate,
    goodsDeliveryDate,
  } = data;

  const handleInputCheck = () => {
    if (
      goodsName === "" ||
      goodsPrice === "" ||
      badgeOpenCount === "" ||
      goodsColor === "" ||
      goodsSize === "" ||
      goodsFrom === "" ||
      goodsImages.length === 0 ||
      goodsReleaseDate === "" ||
      goodsDeliveryDate === ""
    ) {
      alert("데이터를 전부 입력해 주세요.");
      return false;
    }
    return true;
  };

  const { alertModal, handleAlertModal } = useAlertModal({
    deleteAlert: false,
  });

  const handleFormData = () => {
    const formData = new FormData();
    formData.append("goodsName", goodsName);
    formData.append("goodsPrice", goodsPrice);
    formData.append("badgeOpenCount", badgeOpenCount);
    formData.append("goodsColor", goodsColor);
    formData.append("goodsSize", goodsSize);
    formData.append("goodsFrom", goodsFrom);
    formData.append("goodsReleaseDate", goodsReleaseDate);
    formData.append("goodsDeliveryDate", goodsDeliveryDate);

    // 이미지 파일을 배열로 추가
    for (let i = 0; i < goodsImages.length; i++) {
      formData.append("goodsImages", goodsImages[i]);
    }
    return formData;
  };

  const inputChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    let { name, value } = e.target;

    //이미지 추가
    if (name.lastIndexOf("Images") !== -1) {
      const file = e.target.files[0];
      value = goodsImages ? [...goodsImages, file] : [file];
    }

    if (name === "badgeOpenCount") value = Number(value);
    setData((prev) => ({
      ...(prev || {}),
      [name]: value,
    }));
  };

  //이미지 삭제
  const handleImgDelete = (url: string) => {
    let value = goodsImages.filter((urls: any) => urls !== url);
    setData((prev) => ({
      ...(prev || {}),
      goodsImages: value,
    }));
  };

  const handleAlertModalCancel = () => handleAlertModal("deleteAlert");

  const handleGoodsAdd = async () => {
    const inputCheck = handleInputCheck();
    if (!inputCheck) return;

    const formData = handleFormData();

    await handleApiCall(() => goodsAdd(formData), "add");
  };

  const handleGoodsModify = async () => {
    const inputCheck = handleInputCheck();
    if (!inputCheck) return;

    const formData = handleFormData();

    await handleApiCall(() => goodsModify(id, formData), "modify");
  };

  //수정시 굿즈 데이터 가져오기
  const handleGoodsData = async () => {
    if (id === "") return;
    const result = await getGoodsDetailList(id);
    setData({ ...result, goodsImages: [] });
  };

  useEffect(() => {
    state === "수정" && handleGoodsData();
  }, []);

  return (
    <ModalWrapper>
      <Modal>
        <ModalCloseButton close={closeModal} />
        <form onChange={inputChange}>
          <ModalInputText
            label="굿즈명"
            name="goodsName"
            value={goodsName}
            placeholder="굿즈명 입력"
          />
          <ModalInputText
            label="굿즈 금액"
            value={goodsPrice}
            name="goodsPrice"
            placeholder="굿즈 금액 입력"
          />
          <ModalInputNumber
            label="뱃지 해금 개수"
            value={badgeOpenCount}
            name="badgeOpenCount"
            placeholder="뱃지 해금 개수 입력"
          />
          <ModalInputText
            label="색상"
            value={goodsColor}
            name="goodsColor"
            placeholder="#빨강"
          />
          <ModalInputText
            label="사이즈"
            value={goodsSize}
            name="goodsSize"
            placeholder="#s"
          />
          <ModalInputText
            label="발송지"
            value={goodsFrom}
            name="goodsFrom"
            placeholder="발송지 입력"
          />
          <ModalInputDate
            label="상품출시일"
            value={goodsReleaseDate}
            name="goodsReleaseDate"
          />
          <ModalInputDate
            label="예상 배송일"
            value={goodsDeliveryDate}
            name="goodsDeliveryDate"
          />
          <ModalImgAdd
            name="goodsImages"
            value={goodsImages}
            handleImgDelete={handleImgDelete}
          />
        </form>
        <ModalButton
          cancelButton={handleAlertModalCancel}
          addButton={state === "등록" ? handleGoodsAdd : handleGoodsModify}
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
  height: 800px;
  overflow: auto;
  margin: 50px auto;
  background: ${({ theme }) => theme.colors.grayscale[7]};
  padding: 10px 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 12px;
`;
