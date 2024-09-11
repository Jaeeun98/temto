import React from "react";
import styled from "styled-components";
import NavUser from "./nav_user";
import NavList from "./nav_list";

export default function Navbar() {
  return (
    <Container>
      <NavUser />
      <NavList />
    </Container>
  );
}

const Container = styled.nav`
  background-color: ${({ theme }) => theme.colors.grayscale[7]};
  width: 320px;
  height: 100vh;
  padding: 20px;
`;
