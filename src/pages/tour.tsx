import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getTourismList, tourismDelete } from "../api/tour";

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
    Header: "수정",
    accessor: "modify_button",
  },
];

//관광지 리스트
export default function Tour() {
  const { refetch } = useFetchAndSetTableData(
    ["tourList", 0],
    () => getTourismList(0),
    "modify_button", // 버튼 추가 여부를 결정하는 매개변수
    columns
  );

  const handleTorismDelete = async (id: string[]) => {
    const result = await tourismDelete(id);

    if (!result) return;
    else if (result.status === 200) {
      alert("해당 리스트가 삭제되었습니다.");
      refetch();
    }
  };

  return (
    <TableContainer>
      <ListContainer idTitle="tourPlaceId" handleDelete={handleTorismDelete} />
    </TableContainer>
  );
}
