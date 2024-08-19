import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

export default function User() { 
    return (
        <Container>
            <ImgContainer>
                <img src="/images/user.png" alt="user_img" />
            </ImgContainer>
            <p><span className="id">user</span> 님</p>
        </Container>
    )
}

const Container = styled.div`
    padding:70px;
    text-align: center;

     .id {
color: ${theme.colors.text_point};
        font-weight: 500;
        font-size: 28px;
        }

    p {

       
        
    }
`

const ImgContainer = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;

    img {
        width: 100%;
        height: 100%;

    }
    
`