import React, { useState } from "react";

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
  useFetchAndSetTableData(
    ["goodsList", 0],
    () => getGoodsList(0),
    true, // 버튼 추가 여부를 결정하는 매개변수
    columns
  );

  // console.log("goodsId", goodsId);

  const handleGoodsDelete = (id: string) => goodsDelete(id);

  const handleAdd = () => {};

  // const {
  //   data: goodsData,
  //   error,
  //   isLoading,
  // } = useQuery(["goodsList", 0], () => getGoodsList(1));

  // const { setTableData } = useTableContext();

  // //추후에 공통 함수로 만들기 > 그때 타입도 수정하기
  // const getData = () => {
  //   return goodsData.content.map((item: any) => {
  //     return {
  //       ...item,
  //       modify_button: <TableButton>수정</TableButton>,
  //       checkbox: <TableCheckBox type="checkbox" />,
  //     };
  //   });
  // };

  // useEffect(() => {
  //   if (goodsData) {
  //     const data = getData();

  //     setTableData({
  //       data,
  //       page: goodsData.pageable.pageSize,
  //       columns,
  //     });
  //   }
  // }, [goodsData]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error occurred: {error.message}</div>;
  // }

  return (
    <TableContainer>
      <ListContainer idTitle="goodsId" deleteApi={handleGoodsDelete} />
    </TableContainer>
  );
}
