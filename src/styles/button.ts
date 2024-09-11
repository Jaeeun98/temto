import styled from "styled-components";
import colors from "./theme";

const Button = styled.button`
  border: none;
  width: 400px;
  height: 48px;
  padding: 5px 13px;
  border-radius: 8px;
  background-color: ${colors.primary[4]};
  color: ${colors.grayscale[7]};
  font-size: 16px;

  &:disabled {
    background-color: ${colors.grayscale[6]};
    color: ${colors.grayscale[3]};
    cursor: not-allowed;
  }
`;

export default Button;
