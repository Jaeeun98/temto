import React, { useEffect } from "react";
import { useQuery } from "react-query";
// import { Container } from "./goods";
import ListContainer from "../components/common/list_container";
import { useTableContext } from "../context/table_data_context";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { getOrderList } from "../api/order";
import { TableContainer } from "../styles/table_container";

const columns = [
  {
    Header: "",
    accessor: "checkbox",
  },
  {
    Header: "굿즈 ID",
    accessor: "goodsId",
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
    accessor: "orderStatus",
  },
];

export default function Order() {
  const { data, error, isLoading } = useFetchAndSetTableData(
    ["goodsList", 0],
    () => getOrderList(1),
    true, // 버튼 추가 여부를 결정하는 매개변수
    columns
  );

  return (
    <TableContainer>
      <ListContainer title={"주문 리스트"} />
    </TableContainer>
  );
}
