import React from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";

interface Props {
  value: string;
  inputChange: any;
}

export default function ModalImgAdd({ value, inputChange }: Props) {
  return (
    <ModalTextInputWrapper>
      <label htmlFor="">이미지 등록</label>
      <input
        type="file"
        defaultValue={value}
        accept="image/gif, image/jpeg, image/png"
        multiple
      />
    </ModalTextInputWrapper>
  );
}
