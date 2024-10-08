import React from "react";
import styled from "styled-components";
import colors from "../../styles/theme";

//* api 타입 지정하기
interface Props {
  text: string;
  onClick: any;
}

//거절 & 삭제 버튼
export default function DeleteButton({ text, onClick }: Props) {
  return <Button onClick={onClick}>{text}</Button>;
}

const Button = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.delete};
  width: 100px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.delete};
  cursor: pointer;
  font-weight: 500;
`;
