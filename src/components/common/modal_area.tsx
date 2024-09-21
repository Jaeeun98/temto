import React, { useState } from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";
import { useQuery } from "react-query";
import { getAreaCode, getAreaDetailCode } from "../../api/area_code";

interface Props {
  label: string;
  areaCodeValue: string;
  detailAreaCodeValue: string;
}

interface AreaCode {
  areaCode: string;
  areaCodeId: string;
  areaCodeName: string;
}

interface DetailAreaCode {
  detailAreaCode: string;
  detailAreaCodeId: string;
  detailAreaCodeName: string;
}

export default function ModalArea({
  label,
  areaCodeValue,
  detailAreaCodeValue,
}: Props) {
  const { data: areaCode } = useQuery("areaCode", getAreaCode);
  const [detailAreaCode, setDetailAreaCode] = useState<DetailAreaCode[] | null>(
    null
  );

  //detailAreaCode 가져오기
  const areaCodeSelete = async (e: any) => {
    const areaId = e.target.value;

    const result = await getAreaDetailCode(areaId);
    setDetailAreaCode(result);
  };

  return (
    <ModalTextInputWrapper>
      <label htmlFor="areaCodeId">{label}</label>
      <select
        onChange={areaCodeSelete}
        name="areaCodeId"
        id="areaCodeId"
        defaultValue={areaCodeValue}
      >
        <option value={""}>지역 선택</option>
        {areaCode?.map((code: AreaCode) => (
          <option key={code.areaCodeId} value={code.areaCodeId}>
            {code.areaCodeName}
          </option>
        ))}
      </select>

      <select name="detailAreaCodeId" defaultValue={detailAreaCodeValue}>
        <option value={""}>상제 지역 선택</option>
        {detailAreaCode !== null &&
          detailAreaCode.map((code: DetailAreaCode) => (
            <option value={code.detailAreaCodeId} key={code.detailAreaCodeId}>
              {code.detailAreaCodeName}
            </option>
          ))}
      </select>
    </ModalTextInputWrapper>
  );
}
