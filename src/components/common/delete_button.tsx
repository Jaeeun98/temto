import React from "react";
import styled from "styled-components";
import colors from "../../styles/theme";

//* api 타입 지정하기
interface Props {
  text: string;
  api: any;
}

//거절 & 삭제 버튼
export default function DeleteButton({ text, api }: Props) {
  return <Button>{text}</Button>;
}

const Button = styled.button`
  background: none;
  border: 1px solid ${colors.delete};
  width: 100px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  color: ${colors.delete};
  cursor: pointer;
`;
