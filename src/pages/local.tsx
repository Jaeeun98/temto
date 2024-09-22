import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getLocalList, localDelete } from "../api/local";

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
  const { refetch } = useFetchAndSetTableData(
    ["localList", 0],
    () => getLocalList(0),
    "modify_button",
    columns
  );

  const handleLocalDelete = async (id: string) => {
    const result = await localDelete(id);

    if (result.status === 200) {
      alert("해당 리스트가 삭제되었습니다.");
      refetch();
    }
  };

  return (
    <TableContainer>
      <ListContainer idTitle="localItemId" handleDelete={handleLocalDelete} />
    </TableContainer>
  );
}
