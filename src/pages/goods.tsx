import React, { useEffect } from "react";
import { useQuery } from "react-query";

import styled from "styled-components";

import ListContainer from "../components/common/list_container";
import { getGoodsList } from "../api/goods";
import { useTableContext } from "../context/table_data_context";
import { TableButton } from "../components/common/table_button";
import { TableCheckBox } from "../components/common/table_checkbox";

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
    Header: "수정",
    accessor: "modify_button",
  },
];

export default function Goods() {
  const {
    data: goodsData,
    error,
    isLoading,
  } = useQuery(["goodsList", 0], () => getGoodsList(1));

  const { setTableData } = useTableContext();

  //추후에 공통 함수로 만들기 > 그때 타입도 수정하기
  const getData = () => {
    return goodsData.content.map((item: any) => {
      return {
        ...item,
        modify_button: <TableButton>수정</TableButton>,
        checkbox: <TableCheckBox type="checkbox" />,
      };
    });
  };

  useEffect(() => {
    if (goodsData) {
      const data = getData();

      setTableData({
        data,
        page: goodsData.pageable.pageSize,
        columns,
      });
    }
  }, [goodsData]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error occurred: {error.message}</div>;
  // }

  return (
    <Container>
      <ListContainer title={"굿즈 리스트"} />
    </Container>
  );
}

//나중에 공통으로 빼기
const Container = styled.div`
  width: 100%;
`;
