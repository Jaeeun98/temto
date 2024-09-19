import React from "react";
import { usePagination, useTable } from "react-table";
import styled from "styled-components";
import { useTableContext } from "../../context/table_data_context";

export default function Pagination() {
  const { tableData } = useTableContext();

  const {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns: tableData.columns,
      data: tableData.data,
      initialState: { pageIndex: 0, pageSize: tableData.page },
    },
    usePagination
  );
  return (
    <PaginationWrapper>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        «
      </button>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        &lsaquo;
      </button>
      {pageOptions.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => gotoPage(pageNumber)}
          className={pageIndex === pageNumber ? "active" : ""}
        >
          {pageNumber + 1}
        </button>
      ))}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        &rsaquo;
      </button>
      <button
        onClick={() => gotoPage(pageOptions.length - 1)}
        disabled={!canNextPage}
      >
        »
      </button>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.grayscale[4]};
    cursor: pointer;
    padding: 8px;
  }

  button.active {
    color: ${({ theme }) =>
      theme.colors.primary[4]}; /* 선택된 페이지 번호 색상 */
  }

  button:disabled {
    color: #ccc; /* 비활성화된 버튼 색상 */
    cursor: not-allowed;
  }

  button:not(.active):hover {
    color: ${({ theme }) => theme.colors.grayscale[1]};
  }

  button:first-child,
  button:last-child {
    font-weight: bold;
    font-size: 18px;
    margin: 0 5px;
  }
`;
