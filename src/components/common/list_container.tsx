import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Table from "./table";
import { useLocation } from "react-router-dom";
import { nav_arr } from "../nav/nav_list";

export default function ListContainer() {
  // const [title, setTitle] = useState("");
  const location = useLocation();
  const pathname = location?.pathname;

  const title = useMemo(() => {
    const pathname = location?.pathname;
    const selectedMenu = nav_arr.find((menu) => pathname === menu.link);
    return selectedMenu ? selectedMenu.title : "";
  }, [location.pathname]);

  // //title 구하는 함수
  // const handleTitle = () => {
  //   const selectPathname = nav_arr.filter((menu) => pathname === menu.link)[0]
  //     .title;
  //   return selectPathname;
  // };

  // useEffect(() => {
  //   setTitle(handleTitle());
  // }, [pathname]);

  return (
    <Container>
      <H1>{title}</H1>
      <Table />
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
