import React from "react";
import ListContainer from "../components/common/list_container";
import { TableContainer } from "../styles/table_container";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getLocalOfferList } from "../api/local_offer";

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
    accessor: "badgeCode",
  },
  {
    Header: "수정",
    accessor: "modify_button",
  },
];

//특산품 제공
export default function LocalOffer() {
  useFetchAndSetTableData(
    ["LocalOfferList", 0],
    () => getLocalOfferList(0),
    true,
    columns
  );

  return (
    <TableContainer>
      <ListContainer />
    </TableContainer>
  );
}
