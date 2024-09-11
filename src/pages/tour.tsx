import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";

export default function Tour() {
  return (
    <TableContainer>
      <ListContainer title={"관광지 리스트"} />
    </TableContainer>
  );
}
