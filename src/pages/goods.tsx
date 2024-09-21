import React from "react";

import ListContainer from "../components/common/list_container";
import { getGoodsList, goodsDelete } from "../api/goods";
import useFetchAndSetTableData from "../hooks/useSetTableData";
import { TableContainer } from "../styles/table_container";

const columns = [
  {
    header: "",
    accessor: "checkbox",
  },
  {
    Header: "굿즈 ID",
    accessor: "goodsId",
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
  const { refetch } = useFetchAndSetTableData(
    ["goodsList", 0],
    () => getGoodsList(0),
    "modify_button",
    columns
  );

  //*나중에 alert 처리 공통으로 합치기
  const handleGoodsDelete = async (id: string) => {
    const result = await goodsDelete(id);

    if (result.status === 200) {
      alert("해당 리스트가 삭제되었습니다.");
      refetch();
    }
  };

  return (
    <TableContainer>
      <ListContainer idTitle="goodsId" handleDelete={handleGoodsDelete} />
    </TableContainer>
  );
}
