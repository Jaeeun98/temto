import React from "react";
import { useTable, usePagination, Column, TableOptions } from "react-table";
import theme from "../../styles/theme";
import styled from "styled-components";

interface Props<T extends object> {
  columns: any;
  data: T[];
  itemsPerPage: number;
}

export default function Table<T extends object>({
  columns,
  data,
  itemsPerPage,
}: Props<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // 현재 페이지의 데이터
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
    prepareRow,
    gotoPage,
  } = useTable<T>(
    {
      // @ts-ignore
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: itemsPerPage }, // 페이지네이션 초기 상태 및 페이지 당 항목 수
    },
    usePagination
  );

  return (
    <div>
      <table
        {...getTableProps()}
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "1px solid #696969",
                    fontWeight: 500,
                    fontSize: 18,
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </Tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      borderBottom: "1px solid #ddd",
                      textAlign: "center",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </Tr>
            );
          })}
        </tbody>
      </table>
      <Pagination>
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
      </Pagination>
    </div>
  );
}

const Tr = styled.tr`
  height: 68px;
  line-height: 68px;
  color: ${theme.colors.text_gray};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;

  button {
    background: none;
    border: none;
    color: #c6c6c6;
    cursor: pointer;
    padding: 8px;
  }

  button.active {
    color: #6a0dad; /* 선택된 페이지 번호 색상 */
  }

  button:disabled {
    color: #ccc; /* 비활성화된 버튼 색상 */
    cursor: not-allowed;
  }

  button:not(.active):hover {
    color: #000;
  }

  button:first-child,
  button:last-child {
    font-weight: bold;
    font-size: 18px;
    margin: 0 5px;
  }
`;
