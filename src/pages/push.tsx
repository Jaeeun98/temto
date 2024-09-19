import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getPushList } from "../api/push";

const columns = [
  {
    Header: "",
    accessor: "checkbox",
  },
  {
    Header: "등록일자",
    accessor: "regDatetime",
  },
  {
    Header: "제목",
    accessor: "pushTitle",
  },
  {
    Header: "상세보기",
    accessor: "detail_button",
  },
];

//푸시 리스트
export default function Push() {
  useFetchAndSetTableData(
    ["pushList", 0],
    () => getPushList(),
    "detail_button", // 버튼 추가 여부를 결정하는 매개변수
    columns
  );
  return (
    <TableContainer>
      <ListContainer />
    </TableContainer>
  );
}
