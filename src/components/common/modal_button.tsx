import React from "react";
import styled from "styled-components";

interface Props {
  cancleButton: any;
  addButton: any;
  state: "등록" | "수정";
}

//모달 취소, 추가 버튼
export default function ModalButton({ cancleButton, addButton, state }: Props) {
  return (
    <ButtonBox>
      <button onClick={cancleButton} className="no">
        취소
      </button>
      <button type="submit" onClick={addButton} className="yes">
        {state}
      </button>
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
