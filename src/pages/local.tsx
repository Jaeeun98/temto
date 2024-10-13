import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getLocalList, localDelete } from "../api/local";
import { handleDeleteApiCall } from "../utils/apiHandler";

const columns = [
  {
    Header: "",
    accessor: "checkbox",
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
    Header: "수정",
    accessor: "modify_button",
  },
];

//특산품 리스트
export default function Local() {
  const { refetch, setCurrentPage } = useFetchAndSetTableData(
    "localItemId",
    getLocalList,
    "modify_button",
    columns
  );

  const handleLocalDelete = async (id: string[]) =>
    await handleDeleteApiCall(() => localDelete(id), refetch);

  const handlePage = (page: number) => setCurrentPage(page);

  return (
    <TableContainer>
      <ListContainer
        handlePage={handlePage}
        idTitle="localItemId"
        handleDelete={handleLocalDelete}
      />
    </TableContainer>
  );
}
