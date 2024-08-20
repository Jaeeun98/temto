import styled from "styled-components";
import theme from "../../styles/theme";

const Button = styled.button`
  border: 1px solid ${theme.colors.point};
  width: 400px;
  height: 48px;
  padding: 5px 13px;
  border-radius: 8px;
  background-color: ${theme.colors.point};
  color: #fff;
  font-size: 16px;

  &:disabled {
    background-color: ${theme.colors.gray};
    border: 1px solid ${theme.colors.gray};
    color: ${theme.colors.text_gray};
    cursor: not-allowed;
  }
`;

export default Button;
