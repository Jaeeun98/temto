import React from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";

interface Props {
  label: string;
  value: string;
  placeholder: string;
  name?: string;
}

export default function ModalInputNumber({
  label,
  value,
  placeholder,
  name,
}: Props) {
  return (
    <ModalTextInputWrapper>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="number"
        name={name}
        defaultValue={value}
        placeholder={placeholder}
      />
    </ModalTextInputWrapper>
  );
}
