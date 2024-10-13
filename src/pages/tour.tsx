import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getTourismList, tourismDelete } from "../api/tour";
import { handleDeleteApiCall } from "../utils/apiHandler";

const columns = [
  {
    Header: "",
    accessor: "checkbox",
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
    Header: "뱃지 코드",
    accessor: "badgeCodeName",
  },
  {
    Header: "수정",
    accessor: "modify_button",
  },
];

//관광지 리스트
export default function Tour() {
  const { refetch, setCurrentPage } = useFetchAndSetTableData(
    "tourPlaceId",
    getTourismList,
    "modify_button", // 버튼 추가 여부를 결정하는 매개변수
    columns
  );

  const handleTorismDelete = async (id: string[]) =>
    await handleDeleteApiCall(() => tourismDelete(id), refetch);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <TableContainer>
      <ListContainer
        handlePage={handlePage}
        idTitle="tourPlaceId"
        handleDelete={handleTorismDelete}
      />
    </TableContainer>
  );
}
