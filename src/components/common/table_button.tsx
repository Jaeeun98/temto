//table button

import React from "react";
import styled from "styled-components";

export const addModifyButton = (item: any) => {
  return {
    ...item,
    modify_button: <TableButton>수정</TableButton>,
  };
};

export const TableButton = styled.button`
  border: 1px solid #696969;
  background: none;
  border-radius: 8px;
  width: 84px;
  height: 38px;
`;
//추후에 공통 함수로 만들기 > 그때 타입도 수정하기
