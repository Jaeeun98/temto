import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getLocalList } from "../api/local";

const columns = [
  {
    Header: "",
    accessor: "checkbox",
  },
  {
    Header: "특산품 ID",
    accessor: "localItemId",
  },
  {
    Header: "특산품명",
    accessor: "localItemName",
  },
  {
    Header: "금액",
    accessor: "localItemPrice",
  },
  {
    Header: "지역코드",
    accessor: "localItemBadgeCount",
  },
  {
    Header: "수정",
    accessor: "modify_button",
  },
];

//특산품 리스트
export default function Local() {
  useFetchAndSetTableData(
    ["LocalList", 0],
    () => getLocalList(1),
    true,
    columns
  );
  return (
    <TableContainer>
      <ListContainer />
    </TableContainer>
  );
}
