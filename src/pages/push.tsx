import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";

export default function Push() {
  return (
    <TableContainer>
      <ListContainer title={"푸시 리스트"} />
    </TableContainer>
  );
}
