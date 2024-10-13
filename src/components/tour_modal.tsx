import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../styles/modal_wrapper";
import styled from "styled-components";
import ModalCloseButton from "./common/modal_close_button";
import ModalInputText from "./common/modal_input_text";

import ModalImgAdd from "./common/modal_img_add";
import ModalButton from "./common/modal_button";
import ModalBadgeCode from "./common/modal_badge_code";
import { TourDetail } from "../types/tour";
import { getTourismDetailList, tourismAdd, tourismModify } from "../api/tour";
import ModalAlert from "./common/modal_alert";
import { useAlertModal } from "../hooks/useAlertModal";
import { handleApiCall } from "../utils/apiHandler";

interface Props {
  id: string;
  closeModal: any;
  state: "등록" | "수정";
}

//관광지 추가, 수정 모달창
export default function TourModal({ id, closeModal, state }: Props) {
  const [data, setData] = useState<TourDetail>({
    tourismName: "",
    tourismAddress: "",
    tourismLink: "",
    tourismContact: "",
    tourismMapX: "",
    tourismMapY: "",
    badgeCode: "",
    tourismImages: [],
  });

  const { alertModal, handleAlertModal } = useAlertModal({
    deleteAlert: false,
  });

  const {
    tourismMapX,
    tourismMapY,
    badgeCode,
    tourismName,
    tourismAddress,
    tourismContact,
    tourismImages,
    tourismLink,
  } = data;

  const inputChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    let { name, value } = e.target;

    //이미지 추가
    if (name.lastIndexOf("Images") !== -1) {
      const file = e.target.files[0];
      value = tourismImages ? [...tourismImages, file] : [file];
    }

    if (name === "badgeOpenCount") value = Number(value);
    setData((prev) => ({
      ...(prev || {}),
      [name]: value,
    }));
  };

  //이미지 삭제
  const handleImgDelete = (url: string) => {
    let value = tourismImages.filter((urls: any) => urls !== url);
    setData((prev) => ({
      ...(prev || {}),
      tourismImages: value,
    }));
  };

  const handleAlertModalCancel = () => handleAlertModal("deleteAlert");

  const handleInputCheck = () => {
    if (
      tourismMapX === "" ||
      tourismMapY === "" ||
      badgeCode === "" ||
      tourismName === "" ||
      tourismAddress === "" ||
      tourismContact === "" ||
      tourismImages.length === 0 ||
      tourismLink === ""
    ) {
      alert("데이터를 전부 입력해 주세요.");
      return false;
    }
    return true;
  };

  const handleFormData = () => {
    const formData = new FormData();
    formData.append("tourismMapX", tourismMapX);
    formData.append("tourismMapY", tourismMapY);
    formData.append("badgeCode", badgeCode);
    formData.append("tourismName", tourismName);
    formData.append("tourismAddress", tourismAddress);
    formData.append("tourismContact", tourismContact);
    formData.append("tourismImages", tourismImages);
    formData.append("tourismLink", tourismLink);

    // 이미지 파일을 배열로 추가
    for (let i = 0; i < tourismImages.length; i++) {
      formData.append("tourismImages", tourismImages[i]);
    }
    return formData;
  };

  const handleTourAdd = async () => {
    const inputCheck = handleInputCheck();
    if (!inputCheck) return;

    const formData = handleFormData();

    await handleApiCall(() => tourismAdd(formData), "add");
  };

  const handleTourModify = async () => {
    const inputCheck = handleInputCheck();
    if (!inputCheck) return;

    const formData = handleFormData();

    await handleApiCall(() => tourismModify(id, formData), "modify");
  };

  const handleTourData = async () => {
    if (id === "") return;
    const result = await getTourismDetailList(id);
    setData({ ...result, tourismImages: [] });
  };

  useEffect(() => {
    state === "수정" && handleTourData();
  }, []);

  return (
    <ModalWrapper>
      <Modal>
        <ModalCloseButton close={closeModal} />
        <form onChange={inputChange}>
          <ModalInputText
            label="관광지명"
            name="tourismName"
            value={tourismName}
            placeholder="관광지명 입력"
          />
          <ModalInputText
            label="주소"
            value={tourismAddress}
            name="tourismAddress"
            placeholder="주소 입력"
          />
          <ModalInputText
            label="관광지 경도"
            value={tourismMapX}
            name="tourismMapX"
            placeholder="관광지 경도"
          />
          <ModalInputText
            label="관광지 위도"
            value={tourismMapY}
            name="tourismMapY"
            placeholder="관광지 위도"
          />
          <ModalInputText
            label="링크"
            value={tourismLink}
            name="tourismLink"
            placeholder="링크 입력"
          />
          <ModalInputText
            label="연락처"
            value={tourismContact}
            name="tourismContact"
            placeholder="연락처 입력"
          />
          <ModalBadgeCode value={badgeCode} />
          <ModalImgAdd
            handleImgDelete={handleImgDelete}
            value={tourismImages}
            name="tourismImages"
          />
        </form>
        <ModalButton
          cancelButton={handleAlertModalCancel}
          addButton={state === "등록" ? handleTourAdd : handleTourModify}
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
  padding: 30px;
  border-radius: 12px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
