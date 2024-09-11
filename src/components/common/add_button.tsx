//등록 버튼

import styled from "styled-components";
import colors from "../../styles/theme";
import React from "react";

//* api 타입 지정하기
interface Props {
  text: string;
  api: any;
}

export default function AddButton({ text, api }: Props) {
  return <Button>{text}</Button>;
}
const Button = styled.button`
  background: ${colors.primary[4]};
  border: none;
  width: 100px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  color: ${colors.grayscale[7]};
  cursor: pointer;
  font-weight: 500;
`;
