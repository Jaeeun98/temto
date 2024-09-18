import styled from "styled-components";
import colors from "./theme";

const Button = styled.button`
  border: none;
  width: 400px;
  height: 48px;
  padding: 5px 13px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary[4]};
  color: ${({ theme }) => theme.colors.grayscale[7]};
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayscale[6]};
    color: ${({ theme }) => theme.colors.grayscale[3]};
    cursor: not-allowed;
  }
`;

export default Button;
