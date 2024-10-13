import React from "react";
import ListContainer from "../components/common/list_container";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getOrderList, orderDelete } from "../api/order";
import { TableContainer } from "../styles/table_container";
import { handleDeleteApiCall } from "../utils/apiHandler";

const columns = [
  {
    Header: "",
    accessor: "checkbox",
  },
  {
    Header: "굿즈명",
    accessor: "goodsName",
  },
  {
    Header: "주문일자",
    accessor: "orderDatetime",
  },
  {
    Header: "주문자명",

    accessor: "orderUser",
  },
  {
    Header: "금액",
    accessor: "orderPrice",
  },
  {
    Header: "주문진행상황",
    accessor: "progress_button",
  },
];

//주문 리스트
export default function Order() {
  const { refetch, setCurrentPage } = useFetchAndSetTableData(
    "orderId",
    getOrderList,
    "progress_button", // 버튼 추가 여부를 결정하는 매개변수
    columns
  );

  const handleOrderDelete = async (id: string[]) =>
    await handleDeleteApiCall(() => orderDelete(id), refetch);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  console.log("order");

  return (
    <TableContainer>
      <ListContainer
        idTitle="orderId"
        handleDelete={handleOrderDelete}
        handlePage={handlePage}
      />
    </TableContainer>
  );
}
