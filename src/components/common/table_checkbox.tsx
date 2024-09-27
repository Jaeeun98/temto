//table checkbox
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCheckboxContext } from "../../context/table_checkboxId_context";

export const addCheckbox = (item: any, queryKey: any) => {
  return {
    ...item,
    checkbox: <TableCheckboxComponent item={item} queryKey={queryKey} />,
  };
};

const TableCheckboxComponent = ({
  item,
  queryKey,
}: {
  item: any;
  queryKey: any;
}) => {
  const { checkboxId: checkboxIdArr } = useCheckboxContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const result = checkboxIdArr.includes(item[queryKey]);
    setChecked(result);
  }, [checkboxIdArr]);

  return <TableCheckbox type="checkbox" checked={checked} />;
};

export const TableCheckbox = styled.input`
  width: 30px;
  height: 30px;
  transform: translate(0, 10px);
`;
