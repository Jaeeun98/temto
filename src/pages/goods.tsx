import React from "react";
import ListContainer from "../components/common/list_container";
import styled from "styled-components";

export default function Goods() {
  return (
    <Container>
      <ListContainer title={"굿즈 리스트"} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
