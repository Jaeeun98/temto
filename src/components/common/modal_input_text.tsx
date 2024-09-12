import React from "react";
import styled from "styled-components";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";

interface Props {
  label: string;
  value: string;
  inputChange: any;
  placeholder: string;
}

export default function ModalInputText({
  label,
  value,
  inputChange,
  placeholder,
}: Props) {
  return (
    <ModalTextInputWrapper>
      <label htmlFor="">{label}</label>
      <input type="text" defaultValue={value} placeholder={placeholder} />
    </ModalTextInputWrapper>
  );
}
