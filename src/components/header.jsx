import styled from "styled-components";
import theme from "../styles/theme";

export default function Header() {
  return (
    <HeaderStyle>
      <img src="/images/logo.png" alt="temto_logo" />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  background-color  : ${theme.colors.default};
  border-bottom: ${theme.colors.line_gray};
  height: 80px;
  padding-left: 20px;
  display: flex;
  align-items: center;


  img {
    width: 70px;
    height: 40px;
  }
`
