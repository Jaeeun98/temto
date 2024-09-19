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
        <option value="DEPOSIT_CONFIRMED">입금확인</option>
        <option value="SHIPPING_COMPLETED">발송완료</option>
        <option value="WAITING_FOR_DEPOSIT">입금전</option>
        <option value="ITEM_SHIPPED">상품발송</option>
      </Select>
    ),
  };
}

const Select = styled.select`
  width: 100px;
  padding: 5px 10px;
  border-radius: 8px;
`;
