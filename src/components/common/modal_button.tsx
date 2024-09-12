import React from "react";
import styled from "styled-components";

//모달 취소, 추가 버튼
export default function ModalButton() {
  return (
    <ButtonBox>
      <button className="no">취소</button>
      <button className="yes">추가</button>
    </ButtonBox>
  );
}

/*버튼 공통 컴포넌트로 만들수 있으면 만들기 */
const ButtonBox = styled.div`
  text-align: right;

  .yes {
    background: ${({ theme }) => theme.colors.primary[4]};
    color: ${({ theme }) => theme.colors.grayscale[7]};
  }

  .no {
    color: ${({ theme }) => theme.colors.primary[4]};
    margin-right: 25px;
  }

  button {
    background: none;
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.primary[4]};
    width: 100px;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
  }
`;
