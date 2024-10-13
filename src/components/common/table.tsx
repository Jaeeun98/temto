import React, { useEffect, useState } from "react";
import { useTable, usePagination, Row } from "react-table";
import styled from "styled-components";
import { useTableContext } from "../../context/table_data_context";
import { useCheckboxContext } from "../../context/table_checkboxId_context";

import DeleteButton from "./delete_button";
import AddButton from "./add_button";
import ModalAlert from "./modal_alert";
import { IdTitle } from "../../types/table";
import GoodsModal from "../goods_modal";
import TourModal from "../tour_modal";
import LocalModal from "../local_modal";
import LocalOfferModal from "../local_offer_modal";
import PushModal from "../push_modal";
import { useAlertModal } from "../../hooks/useAlertModal";

interface Props {
  idTitle: IdTitle; //api에 넣을 id key
  handleDelete?: any;
  handlePage?: any;
}

//id = 선택된 id
const addComponent = (
  idTitle: IdTitle,
  id: string,
  closeModal: any,
  state: "등록" | "수정"
) => {
  switch (idTitle) {
    case "goodsId":
      return <GoodsModal id={id} closeModal={closeModal} state={state} />;
    case "tourPlaceId":
      return <TourModal id={id} closeModal={closeModal} state={state} />;
    case "localItemId":
      return <LocalModal id={id} closeModal={closeModal} state={state} />;
    case "giveLocalItemId":
      return <LocalOfferModal id={id} closeModal={closeModal} state={state} />;
    case "pushId":
      return <PushModal id={id} closeModal={closeModal} state={state} />;
  }
};

export default function Table({ idTitle, handleDelete, handlePage }: Props) {
  const { tableData } = useTableContext();
  const { checkboxId, setCheckboxId } = useCheckboxContext();
  const [id, setId] = useState(""); //하나만 선택
  const { alertModal, handleAlertModal } = useAlertModal({
    deleteAlert: false,
    addAlert: false,
    modifyAlert: false,
  });

  const deleteText = idTitle === "orderId" ? "거절" : "삭제";

  //api 호출시 필요한 ID 저장 - checkbox
  const handleSaveId = (checked: any, row: Row<any>) => {
    let rowId = row.original[idTitle];
    //추가
    if (checked) {
      if (!checkboxId.includes(rowId))
        rowId = checkboxId.concat(row.original[idTitle]);
    } else {
      //삭제
      rowId = checkboxId.filter((item: any) => item !== rowId);
    }

    setCheckboxId(rowId);
  };

  const handleModifySaveId = (row: Row<any>) => setId(row.original[idTitle]);

  //삭제할 아이디 선택했는지 체크
  const handleDeleteIdCheck = () => {
    if (checkboxId.length === 0) {
      alert("리스트를 선택해주세요.");
      return false;
    }
    return true;
  };

  const handleDeleteAlert = () => {
    if (!handleDeleteIdCheck()) return;
    handleAlertModal("deleteAlert");
  };

  const handleAddAlert = () => {
    handleAlertModal("addAlert");
  };

  const handleModifyAlert = () => {
    handleAlertModal("modifyAlert");
  };
  //react-table 데이터
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    pageOptions,
    gotoPage,
  } = useTable(
    {
      // @ts-ignore
      columns: tableData.columns,
      data: tableData.data,
      initialState: {
        pageIndex: 0,
      },
      manualPagination: true,
      pageCount: tableData.page?.totalPages,
    },
    usePagination
  );

  useEffect(() => {
    setCheckboxId([]);
  }, [tableData]);

  console.log("table");

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
                  const cellId = cell.column.id;
                  let value = cell.row.values[cellId];

                  if (cell.column.Header === "금액")
                    value = Number(value)?.toLocaleString("ko-KR");

                  return (
                    <td
                      onClick={(e) => {
                        const target = e.target as any;

                        if (cellId === "checkbox")
                          handleSaveId(target.checked, row);
                        if (target.tagName === "BUTTON") {
                          if (
                            cellId === "modify_button" ||
                            cellId === "detail_button"
                          ) {
                            handleModifySaveId(row);
                            handleModifyAlert();
                          }
                        }
                      }}
                      key={key}
                      {...rest}
                      style={{
                        borderBottom: "1px solid #ddd",
                        textAlign: "center",
                      }}
                    >
                      {value}
                    </td>
                  );
                })}
              </Tr>
            );
          })}
        </tbody>
      </table>
      {idTitle !== "pushId" && (
        <PaginationWrapper>
          <button
            onClick={() => {
              gotoPage(1);
              handlePage(0);
            }}
            disabled={tableData.page?.nowPage + 1 === 1 ? true : false}
          >
            «
          </button>
          <button
            onClick={() => {
              previousPage();
              handlePage(tableData.page?.nowPage - 1);
            }}
            disabled={tableData.page?.nowPage + 1 === 1 ? true : false}
          >
            &lsaquo;
          </button>
          {pageOptions.map((pageNumber) => (
            <button
              key={pageNumber + 1}
              onClick={() => {
                gotoPage(pageNumber + 1);
                handlePage(pageNumber);
              }}
              className={
                tableData.page?.nowPage + 1 === pageNumber + 1 ? "active" : ""
              }
            >
              {pageNumber + 1}
            </button>
          ))}
          <button
            onClick={() => {
              nextPage();
              handlePage(tableData?.page.nowPage + 1);
            }}
            disabled={
              tableData.page?.nowPage === tableData.page?.totalPages - 1
                ? true
                : false
            }
          >
            &rsaquo;
          </button>
          <button
            onClick={() => {
              gotoPage(pageOptions.length - 1);
              handlePage(tableData.page?.totalPages - 1);
            }}
            disabled={
              tableData.page?.nowPage === tableData.page?.totalPages - 1
                ? true
                : false
            }
          >
            »
          </button>
        </PaginationWrapper>
      )}
      <ButtonContainer>
        {idTitle !== "pushId" && (
          <DeleteButton text={deleteText} onClick={handleDeleteAlert} />
        )}
        {idTitle !== "orderId" && (
          <AddButton text="등록" onClick={handleAddAlert} />
        )}
      </ButtonContainer>
      {alertModal.addAlert && addComponent(idTitle, id, handleAddAlert, "등록")}
      {alertModal.modifyAlert &&
        addComponent(idTitle, id, handleModifyAlert, "수정")}
      {alertModal.deleteAlert && (
        <ModalAlert
          close={handleDeleteAlert}
          api={() => handleDelete(checkboxId)}
          text={`선택하신 리스트를 ${deleteText}하시겠습니까?`}
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
