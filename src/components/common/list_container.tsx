import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Table from "./table";

//수정버튼 style > 추후에 공통으로 옮기기
const Button = styled.button`
  border: 1px solid #696969;
  background: none;
  border-radius: 8px;
  width: 84px;
  height: 38px;
`;

//checkbox style > 추후에 공통으로 옮기기
const CheckBox = styled.input`
  /* width: 36px;
  height: 36px; */
  border: 1px solid #c6c6c6;
  border-radius: 6px;
`;

const testColumns = [
  {
    Header: "",
    accessor: "checkbox",
  },
  {
    Header: "굿즈 ID",
    accessor: "goods_id",
  },
  {
    Header: "굿즈명",
    accessor: "goods_name",
  },
  {
    Header: "금액",
    accessor: "place",
  },
  {
    Header: "색상",
    accessor: "color",
  },
  {
    Header: "사이즈",
    accessor: "size",
  },
  {
    Header: "수정",
    accessor: "modify_button",
  },
];

const testData = [
  {
    checkbox: <CheckBox type="checkbox" />,
    goods_id: "굿즈ID",
    goods_name: "굿즈명",
    place: "1,000원",
    color: "색상",
    size: "사이즈",
    modify_button: <Button>수정</Button>,
  },
  {
    checkbox: <CheckBox type="checkbox" />,
    goods_id: "굿즈ID",
    goods_name: "굿즈명",
    place: "1,000원",
    color: "색상",
    size: "사이즈",
    modify_button: <Button>수정</Button>,
  },
];

interface Props {
  title: string;
}

export default function ListContainer({ title }: Props) {
  return (
    <Container>
      <H1>{title}</H1>
      <Table columns={testColumns} data={testData} itemsPerPage={10} />
    </Container>
  );
}

const Container = styled.section`
  padding: 40px;
  height: 634px;
`;

const H1 = styled.h1`
  color: ${theme.colors.text_point};
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 50px;
`;
