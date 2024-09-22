import React from "react";
import styled from "styled-components";
import { orderStatusChange } from "../api/order";

//주문리스트 - 주문 진행 상황 버튼
export default function ProgressButon(tableData: any) {
  const onSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const result = await orderStatusChange({
      orderItemId: tableData.orderId,
      orderStatus: e.target.value,
    });

    if (result.status === 200) alert("주문 진행 사항이 변경되었습니다.");
  };

  return {
    ...tableData,
    progress_button: (
      <Select
        defaultValue={tableData.orderStatus}
        onChange={(e) => onSelectChange(e)}
      >
        <option value="01">결제완료</option>
        <option value="02">배송중</option>
        <option value="03">배송완료</option>
      </Select>
    ),
  };
}

const Select = styled.select`
  width: 100px;
  padding: 5px 10px;
  border-radius: 8px;
`;
