//table checkbox
import React from "react";
import styled from "styled-components";

export const addCheckbox = (item: any) => {
  return {
    ...item,
    checkbox: <TableCheckbox type="checkbox" />,
  };
};

export const TableCheckbox = styled.input`
  width: 30px;
  height: 30px;
  /* border: 1px solid #c6c6c6;
  border-radius: 6px; */
  transform: translate(0, 10px);
`;
