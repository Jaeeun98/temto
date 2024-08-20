import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import NavUser from "./nav_user.tsx";
import NavList from "./nav_list.tsx";


export default function Navbar() { 
    return (
        <Container>
            <NavUser />
            <NavList />
        </Container>
    )
}

const Container = styled.nav`
    background-color : ${theme.colors.default};
    width: 320px;
    height: 100vh;
    padding: 20px;
`
