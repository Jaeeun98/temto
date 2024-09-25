import React from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";
import styled from "styled-components";

interface Props {
  value: any;
  name: string;
  handleImgDelete: (url: string) => void;
}

export default function ModalImgAdd({ value, name, handleImgDelete }: Props) {
  return (
    <ModalTextInputWrapper>
      <label htmlFor="">이미지 등록</label>
      <ImgContainer>
        <label htmlFor="file" className="fileBox">
          <img src="/images/img_icon.png" alt="image_icon" />
          <input
            id="file"
            name={name}
            type="file"
            defaultValue={value}
            accept="image/gif, image/jpeg, image/png"
            multiple
          />
          <p>({value?.length}/10)</p>
        </label>

        {value?.map((img: any, i: number) => (
          <ImgWrapper key={img}>
            <img src={URL.createObjectURL(img)} alt={`upload_img ${i + 1}`} />
            <DeleteBtn onClick={() => handleImgDelete(img)}> ×</DeleteBtn>
          </ImgWrapper>
        ))}
      </ImgContainer>
    </ModalTextInputWrapper>
  );
}

const ImgContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale[4]};
  gap: 10px;

  .fileBox {
    width: 64px;
    height: 64px;
    background: #f6f6f6;
    margin-top: 20px;
    border-radius: 8px;
    text-align: center;
    padding-top: 7px;
    cursor: pointer;

    p {
      font-size: 11px;
      color: #c6c6c6;
    }
  }

  input {
    display: none;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  margin-top: 20px;

  img {
    width: 64px;
    height: 64px;
  }
`;
const DeleteBtn = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 5px;
  right: 5px;
  border: 1px solid #fff;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
