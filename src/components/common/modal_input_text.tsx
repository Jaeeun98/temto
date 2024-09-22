import React from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";

interface Props {
  label: string;
  value: string;
  placeholder: string;
  name?: string;
  disabled?: boolean;
}

export default function ModalInputText({
  label,
  value,
  placeholder,
  name,
  disabled,
}: Props) {
  return (
    <ModalTextInputWrapper>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="text"
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        disabled={disabled}
      />
    </ModalTextInputWrapper>
  );
}
