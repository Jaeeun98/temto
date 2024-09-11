import React from "react";
import { useTable, usePagination } from "react-table";
import styled from "styled-components";
import { useTableContext } from "../../context/table_data_context";
import colors from "../../styles/theme";

export default function Table() {
  const { tableData } = useTableContext();

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
  } = useTable(
    {
      // @ts-ignore
      columns: tableData.columns,
      data: tableData.data,
      initialState: { pageIndex: 0, pageSize: tableData.page }, // 페이지네이션 초기 상태 및 페이지 당 항목 수
    },
    usePagination
  );

  console.log(tableData);

  return (
    <div>
      <table
        {...getTableProps()}
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...rest } = headerGroup.getHeaderGroupProps(); // key를 추출

            return (
              <Tr key={key} {...rest}>
                {headerGroup.headers.map((column) => {
                  const { key, ...rest } = column.getHeaderProps();

                  return (
                    <th
                      key={key}
                      {...rest}
                      style={{
                        borderBottom: "1px solid #696969",
                        fontWeight: 500,
                        fontSize: 18,
                      }}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
              </Tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            const { key, ...rest } = row.getRowProps(); // key를 추출

            return (
              <Tr key={key} {...rest}>
                {row.cells.map((cell) => {
                  const { key, ...rest } = cell.getCellProps();

                  return (
                    <td
                      key={key}
                      {...rest}
                      style={{
                        borderBottom: "1px solid #ddd",
                        textAlign: "center",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
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
  color: ${colors.grayscale[1]};
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
    color: ${colors.grayscale[4]};
    cursor: pointer;
    padding: 8px;
  }

  button.active {
    color: ${colors.primary[4]}; /* 선택된 페이지 번호 색상 */
  }

  button:disabled {
    color: #ccc; /* 비활성화된 버튼 색상 */
    cursor: not-allowed;
  }

  button:not(.active):hover {
    color: ${colors.grayscale[1]};
  }

  button:first-child,
  button:last-child {
    font-weight: bold;
    font-size: 18px;
    margin: 0 5px;
  }
`;
