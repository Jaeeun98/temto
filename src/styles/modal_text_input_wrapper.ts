import styled from "styled-components";

export const ModalTextInputWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;

  label {
    font-weight: 500;
  }

  select {
    border: none;
  }

  input,
  select {
    margin-top: 10px;
    padding: 10px 0;
    font-size: 14px;
    width: 100%;
    color: ${({ theme }) => theme.colors.grayscale[1]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale[4]};
  }
`;
