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
        <input
          name={name}
          type="file"
          defaultValue={value}
          accept="image/gif, image/jpeg, image/png"
          multiple
        />
        {value.map((img: any, i: number) => (
          <ImgWrapper key={img}>
            <img src={img} alt={`upload_img ${i + 1}`} />
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

  input {
    border: none;
    width: 100px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;

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
