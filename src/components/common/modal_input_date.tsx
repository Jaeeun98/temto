import React from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";

interface Props {
  label: string;
  value: string;
  name?: string;
}

export default function ModalInputDate({ label, value, name }: Props) {
  console.log(value);
  return (
    <ModalTextInputWrapper>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="date" name={name} value={value} />
    </ModalTextInputWrapper>
  );
}
