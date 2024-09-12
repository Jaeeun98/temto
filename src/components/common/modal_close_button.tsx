import React from "react";
import styled from "styled-components";

interface Props {
  close: any;
}

export default function ModalCloseButton({ close }: Props) {
  return (
    <ModalCloseBox>
      <button>X</button>
    </ModalCloseBox>
  );
}

const ModalCloseBox = styled.div`
  text-align: right;

  button {
    border: none;
    background: none;
    text-align: right;
    font-size: 24px;
    cursor: pointer;
  }
`;
