import styled from "styled-components";
import colors from "./theme";

const TextInput = styled.input`
  width: 400px;
  height: 48px;
  padding: 5px 13px;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary[4]};
  }
`;

export default TextInput;
