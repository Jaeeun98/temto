import React from "react";

import ListContainer from "../components/common/list_container";
import { getGoodsList, goodsDelete } from "../api/goods";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { TableContainer } from "../styles/table_container";
import { handleDeleteApiCall } from "../utils/apiHandler";

const columns = [
  {
    header: "",
    accessor: "checkbox",
  },
  {
    Header: "굿즈명",
    accessor: "goodsName",
  },
  {
    Header: "금액",
    accessor: "goodsPrice",
  },
  {
    Header: "색상",
    accessor: "goodsColor",
  },
  {
    Header: "사이즈",
    accessor: "goodsSize",
  },
  {
    Header: "발송지",
    accessor: "goodsFrom",
  },
  {
    Header: "상품출시일",
    accessor: "goodsReleaseDate",
  },
  {
    Header: "예상 발송일",
    accessor: "goodsDeliveryDate",
  },
  {
    Header: "수정",
    accessor: "modify_button",
  },
];

//굿즈
export default function Goods() {
  const { refetch, setCurrentPage } = useFetchAndSetTableData(
    "goodsId",
    getGoodsList,
    "modify_button",
    columns
  );

  const handleGoodsDelete = async (id: string[]) =>
    await handleDeleteApiCall(() => goodsDelete(id), refetch);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <TableContainer>
      <ListContainer
        handlePage={handlePage}
        idTitle="goodsId"
        handleDelete={handleGoodsDelete}
      />
    </TableContainer>
  );
}
