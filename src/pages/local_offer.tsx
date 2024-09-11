import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";

export default function LocalOffer() {
  return (
    <TableContainer>
      <ListContainer title={"특산품 제공 리스트"} />
    </TableContainer>
  );
}
