import React, { useState } from "react";
import { ModalTextInputWrapper } from "../../styles/modal_text_input_wrapper";
import { useQuery } from "react-query";
import { getLocalNameList } from "../../api/local_offer";
import styled from "styled-components";

interface Props {
  label: string;
  value: string;
  placeholder: string;
  name?: string;
  handleInputChange: any;
}

//특산품만
export default function ModalInputSearch({
  label,
  value,
  placeholder,
  name,
  handleInputChange,
}: Props) {
  const { data: localData } = useQuery("getLocalNameData", getLocalNameList);

  const [searchList, setSearchList] = useState([]);
  const [searchFocus, setSearchFocus] = useState(false);

  const handleSearchListFilter = (e: any) => {
    const text = e.target.value;
    const list = localData.filter((item: string) => item.includes(text));
    setSearchList(list);
  };

  return (
    <ModalTextInputWrapper
      onFocus={() => setSearchFocus(true)}
      onBlur={() => setSearchFocus(false)}
    >
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="text"
        name={name}
        value={value}
        onChange={handleSearchListFilter}
        placeholder={placeholder}
      />
      {searchFocus && value !== "" && (
        <SearchListConainer>
          {searchList.map((item) => (
            <li onMouseDown={handleInputChange} key={item}>
              {item}
            </li>
          ))}
        </SearchListConainer>
      )}
    </ModalTextInputWrapper>
  );
}

const SearchListConainer = styled.ul`
  position: absolute;
  background-color: #fff;
  border: 1px solid #eee;
  width: 650px;
  border-radius: 5px;
  li {
    padding: 10px 20px;
    cursor: pointer;
  }
`;
