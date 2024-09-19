//table button

import React from "react";
import styled from "styled-components";

export const addTableButton = (tableData: any, keyText: string) => {
  console.log(keyText);
  return {
    ...tableData,
    [keyText]: (
      <TableButton>{keyText === "detail_button" ? "보기" : "수정"}</TableButton>
    ),
  };
};

export const TableButton = styled.button`
  border: 1px solid #696969;
  background: none;
  border-radius: 8px;
  width: 84px;
  height: 38px;
  cursor: pointer;
`;
