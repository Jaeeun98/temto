import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Table from "./table";

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
  color: ${theme.colors.text_point};
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 50px;
`;
