import React from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";

interface Props {
  label: string;
  value: string;
  inputChange: any;
}

export default function ModalArea({ label, value, inputChange }: Props) {
  return (
    <ModalTextInputWrapper>
      <label htmlFor="">{label}</label>
      <select name="" id=""></select>
    </ModalTextInputWrapper>
  );
}
