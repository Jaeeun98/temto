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
    Header: "관광지 ID",
    accessor: "tourPlaceId",
  },
  {
    Header: "관광지명",
    accessor: "tourPlaceName",
  },
  {
    Header: "주소",
    accessor: "tourPlaceAddress",
  },
  {
    Header: "링크",
    accessor: "tourPlaceLink",
  },
  {
    Header: "연락처",
    accessor: "tourPlaceContact",
  },
  {
    Header: "수정",
    accessor: "orderStatus",
  },
];

//관광지 리스트
export default function Tour() {
  useFetchAndSetTableData(
    ["pushList", 0],
    () => getPushList(1),
    true, // 버튼 추가 여부를 결정하는 매개변수
    columns
  );

  console.log("tour");

  return (
    <TableContainer>
      <ListContainer />
    </TableContainer>
  );
}
