import React, { useState } from "react";
import { useTable, usePagination, Row } from "react-table";
import styled from "styled-components";
import { useTableContext } from "../../context/table_data_context";
import AddButton from "./add_button";
import ModalAlert from "./modal_alert";
import { AlertModalState, AlertType, IdTitle } from "../../types/table";
import GoodsModal from "../goods_modal";
import TourModal from "../tour_modal";
import LocalModal from "../local_modal";
import LocalOfferModal from "../local_offer_modal";
import PushModal from "../push_modal";

interface Props {
  onCheckboxChange?: any;
  idTitle: IdTitle; //api에 넣을 id key
  handleDelete?: any;
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

//모달 알림창 ture, false
export const handleAlertModal = (
  alertType: AlertType,
  setAlertModal: React.Dispatch<React.SetStateAction<AlertModalState>>
) => {
  setAlertModal((prev: any) => ({
    ...prev,
    [alertType]: !prev[alertType],
  }));
};

//*급해서 우선 수정, push는 page가 없고, 다른 컴포넌트는 page가 있어서 나는 에러 > 추후에 수정하기
export default function PushTable({ idTitle, handleDelete }: Props) {
  const { tableData } = useTableContext();
  const [checkBoxId, setCheckboxId] = useState([]); //여러개 선택
  const [id, setId] = useState(""); //하나만 선택
  const [alertModal, setAlertModal] = useState<AlertModalState>({
    deleteAlert: false,
    addAlert: false,
    modifyAlert: false,
  });
  const deleteText = idTitle === "orderId" ? "거절" : "삭제";

  //api 호출시 필요한 ID 저장 - checkbox
  const handleSaveId = (row: Row<any>) =>
    setCheckboxId(checkBoxId.concat(row.original[idTitle]));

  const handleModifySaveId = (row: Row<any>) => setId(row.original[idTitle]);

  const handleDeleteAlert = () =>
    handleAlertModal("deleteAlert", setAlertModal);

  const handleAddAlert = () => {
    handleAlertModal("addAlert", setAlertModal);
  };

  const handleModifyAlert = () => {
    handleAlertModal("modifyAlert", setAlertModal);
  };
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
                        if (cell.column.id === "checkbox") handleSaveId(row);
                        else if (
                          cell.column.id === "modify_button" ||
                          cell.column.id === "detail_button"
                        ) {
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
      {alertModal.modifyAlert &&
        addComponent(idTitle, id, handleModifyAlert, "수정")}
      {alertModal.deleteAlert && (
        <ModalAlert
          close={handleDeleteAlert}
          api={() => handleDelete(checkBoxId)}
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
  margin-top: 20px;
  position: absolute;
  right: 40px;
  display: flex;
  gap: 10px;
`;
