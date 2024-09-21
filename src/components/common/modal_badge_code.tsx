import React from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";
import { getBadgeCodeList } from "../../api/tour";
import { useQuery } from "react-query";

interface Props {
  value: string;
}

interface Code {
  badgeCode: string;
  badgeCodeType: string;
}

export default function ModalBadgeCode({ value }: Props) {
  const { data: badgeCode } = useQuery("badgeCode", getBadgeCodeList);
  console.log(badgeCode);
  return (
    <ModalTextInputWrapper>
      <label htmlFor="">뱃지 분류코드</label>
      <select name="badgeCode" id="" defaultValue={value}>
        <option value="">뱃지 코드 선택 </option>
        {badgeCode?.map((code: Code) => (
          <option key={code.badgeCodeType} value={code.badgeCodeType}>
            {code.badgeCode}
          </option>
        ))}
      </select>
    </ModalTextInputWrapper>
  );
}
