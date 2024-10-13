import React, { useMemo } from "react";
import styled from "styled-components";
import Table from "./table";
import { useLocation } from "react-router-dom";
import { nav_arr } from "../nav/nav_list";
import { IdTitle } from "../../types/table";
import PushTable from "./push_table";
import { CheckboxIdProvider } from "../../context/table_checkboxId_context";

interface Props {
  onCheckboxChange?: any;
  idTitle?: IdTitle; //object key
  handleDelete?: any;
  handlePage?: any;
}

export default function ListContainer({
  handleDelete,
  idTitle = "goodsId",
  handlePage,
}: Props) {
  const location = useLocation();

  const title = useMemo(() => {
    const pathname = location?.pathname;
    const selectedMenu = nav_arr.find((menu) => pathname === menu.link);
    return selectedMenu ? selectedMenu.title : "";
  }, [location.pathname]);

  return (
    <Container>
      <H1>{title}</H1>
      <CheckboxIdProvider>
        {idTitle === "pushId" ? (
          <PushTable idTitle={idTitle} handleDelete={handleDelete} />
        ) : (
          <Table
            idTitle={idTitle}
            handleDelete={handleDelete}
            handlePage={handlePage}
          />
        )}
      </CheckboxIdProvider>
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
