import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Table from "./table";
import { useLocation } from "react-router-dom";
import { nav_arr } from "../nav/nav_list";
import { IdTitle } from "../../types/table";

interface Props {
  onCheckboxChange?: any;
  idTitle?: IdTitle; //object key
  handleDelete?: any;
}

export default function ListContainer({
  handleDelete,
  idTitle = "goodsId",
}: Props) {
  // const [title, setTitle] = useState("");
  const location = useLocation();
  // const pathname = location?.pathname;

  const title = useMemo(() => {
    const pathname = location?.pathname;
    const selectedMenu = nav_arr.find((menu) => pathname === menu.link);
    return selectedMenu ? selectedMenu.title : "";
  }, [location.pathname]);

  return (
    <Container>
      <H1>{title}</H1>
      <Table idTitle={idTitle} handleDelete={handleDelete} />
    </Container>
  );
}

const Container = styled.section`
  padding: 40px;
  height: 634px;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary[4]};
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 50px;
`;
