import React from "react";
import styled from "styled-components";
import Table from "./table";
import colors from "../../styles/theme";

interface Props {
  title: string;
}

export default function ListContainer({ title }: Props) {
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
