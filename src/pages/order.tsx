import React from "react";
import ListContainer from "../components/common/list_container";
import { useQuery } from "react-query";
import { getOrderList } from "../api/order";
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
    accessor: "goodsName",
  },
  {
    Header: "주문자명",
    accessor: "goodsPrice",
  },
  {
    Header: "금액",
    accessor: "goodsColor",
  },
  {
    Header: "주문 징행 상황",
    accessor: "modify_button",
  },
];

export default function Order() {
  const {
    data: orderData,
    error,
    isLoading,
  } = useQuery(["goodsList", 0], () => getOrderList(1));

  return (
    <div>
      <ListContainer title={"주문 리스트"} />
    </div>
  );
}
