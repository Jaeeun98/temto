//등록 버튼

import styled from "styled-components";
import React from "react";

//* api 타입 지정하기
interface Props {
  text: string;
  onClick: any;
}

export default function AddButton({ text, onClick }: Props) {
  return <Button onClick={onClick}>{text}</Button>;
}
const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary[4]};
  border: none;
  width: 100px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayscale[7]};
  cursor: pointer;
  font-weight: 500;
`;
