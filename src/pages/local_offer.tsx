import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getLocalOfferList, localOfferDelete } from "../api/local_offer";

const columns = [
  {
    Header: "",
    accessor: "checkbox",
  },
  {
    Header: "특산품 ID / 특산품 명",
    accessor: "giveLocalItemName",
  },
  {
    Header: "금액",
    accessor: "giveLocalItemPrice",
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

//특산품 제공
export default function LocalOffer() {
  const { refetch, setCurrentPage } = useFetchAndSetTableData(
    "giveLocalItemId",
    getLocalOfferList,
    "modify_button",
    columns
  );

  const handleLocalDelete = async (id: string[]) => {
    const result = await localOfferDelete(id);

    if (result.status === 200) {
      alert("해당 리스트가 삭제되었습니다.");
      refetch();
    }
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <TableContainer>
      <ListContainer
        idTitle="giveLocalItemId"
        handleDelete={handleLocalDelete}
        handlePage={handlePage}
      />
    </TableContainer>
  );
}
