import React, { useState } from "react";
import { useTable, usePagination, Row } from "react-table";
import styled from "styled-components";
import { useTableContext } from "../../context/table_data_context";
import AddButton from "./add_button";
import PushModal from "../push_modal";
import { useAlertModal } from "../../hooks/useAlertModal";

//*급해서 우선 수정, push는 page가 없고, 다른 컴포넌트는 page가 있어서 나는 에러 > 추후에 수정하기
export default function PushTable() {
  const { tableData } = useTableContext();
  const [id, setId] = useState(""); //하나만 선택
  const { alertModal, handleAlertModal } = useAlertModal({
    addAlert: false,
    modifyAlert: false,
  });

  const handleModifySaveId = (row: Row<any>) => setId(row.original["pushId"]);

  const handleAddAlert = () => handleAlertModal("addAlert");

  const handleModifyAlert = () => handleAlertModal("modifyAlert");

  //react-table 데이터
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        // @ts-ignore
        columns: tableData.columns,
        data: tableData.data,
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
                      onClick={() => {
                        if (cell.column.id === "detail_button") {
                          handleModifySaveId(row);
                          handleModifyAlert();
                        }
                      }}
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
      <ButtonContainer>
        <AddButton text="등록" onClick={handleAddAlert} />
      </ButtonContainer>
      {alertModal.addAlert && (
        <PushModal id={id} closeModal={handleAddAlert} state={"등록"} />
      )}
      {alertModal.modifyAlert && (
        <PushModal id={id} closeModal={handleModifyAlert} state={"수정"} />
      )}
    </div>
  );
}

const Tr = styled.tr`
  height: 68px;
  line-height: 68px;
  color: ${({ theme }) => theme.colors.grayscale[1]};
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  position: absolute;
  right: 40px;
  display: flex;
  gap: 10px;
`;
