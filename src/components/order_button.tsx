import React from "react";
import styled from "styled-components";

//주문리스트 - 주문 진행 상황 버튼
export default function OrderButon() {
  return (
    <Select>
      <option value="">입금확인</option>
      <option value="">상품발송</option>
      <option value="">발송완료</option>
    </Select>
  );
}

const Select = styled.select`
  width: 100px;
  padding: 5px 10px;
  border-radius: 8px;
`;
