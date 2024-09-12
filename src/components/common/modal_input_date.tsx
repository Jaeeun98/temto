import React from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";

interface Props {
  label: string;
  value: string;
  inputChange: any;
}

export default function ModalInputDate({ label, value, inputChange }: Props) {
  return (
    <ModalTextInputWrapper>
      <label htmlFor="">{label}</label>
      <input type="date" defaultValue={value} />
    </ModalTextInputWrapper>
  );
}
