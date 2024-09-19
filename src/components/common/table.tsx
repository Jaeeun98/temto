import React, { useState } from "react";
import { useTable, usePagination } from "react-table";
import styled from "styled-components";
import { useTableContext } from "../../context/table_data_context";
import Pagination from "./table_pagination";
import DeleteButton from "./delete_button";
import AddButton from "./add_button";
import ModalAlert from "./modal_alert";

interface Props {
  onCheckboxChange?: any;
  idTitle: any;
  handleDelete?: any;
  handleAdd?: any;
}

interface AlertModalState {
  deleteAlert: boolean;
  addAlert: boolean;
  modifyAlert: boolean;
}

type AlertType = keyof AlertModalState;

export default function Table({ idTitle, handleDelete, handleAdd }: Props) {
  const { tableData } = useTableContext();
  const [id, setId] = useState([]);
  const [alertModal, setAlertModal] = useState<AlertModalState>({
    deleteAlert: false,
    addAlert: false,
    modifyAlert: false,
  });

  //api 호출시 필요한 ID 저장
  const handleSaveId = (cell: any, row: any) => {
    if (cell.column.id === "checkbox") {
      setId(id.concat(row.original[idTitle]));
    }
  };

  // const handleDelete = () => {
  //   deleteApi(id);
  // };

  const handleAlertModal = (alertType: AlertType) => {
    console.log(alertType);
    setAlertModal((prev) => ({
      ...prev,
      [alertType]: !prev[alertType],
    }));
  };

  //react-table 데이터
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        // @ts-ignore
        columns: tableData.columns,
        data: tableData.data,
        initialState: { pageIndex: 0, pageSize: tableData.page },
      },
      usePagination
    );

  console.log(alertModal);

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
                  // console.log(row);
                  return (
                    <td
                      onClick={() => handleSaveId(cell, row)}
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
      {tableData.page && <Pagination />}

      <ButtonContainer>
        <DeleteButton
          text="거절"
          onClick={() => handleAlertModal("deleteAlert")}
        />
        {handleAdd && <AddButton text="등록" api="" />}
      </ButtonContainer>
      {alertModal.deleteAlert && (
        <ModalAlert
          close={() => handleAlertModal("deleteAlert")}
          api={() => handleDelete(id)}
          text="선택하신 리스트를 거절하시겠습니까?"
        />
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
  position: absolute;
  right: 40px;
  display: flex;
  gap: 10px;
`;
