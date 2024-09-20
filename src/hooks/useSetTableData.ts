import { useEffect } from "react";
import { useQuery } from "react-query";
import { useTableContext } from "../context/table_data_context";
import { addTableButton } from "../components/common/table_button";
import { addCheckbox } from "../components/common/table_checkbox";
import OrderButon from "../components/progress_button";

type ButtonType = "progress_button" | "modify_button" | "detail_button";

//테이블 데이터 처리
function useFetchAndSetTableData<T>(
  queryKey: [string, any],
  fetchFunction: () => Promise<any>,
  addButtonType: ButtonType, //어떤 버튼 추가할지
  columns: any
) {
  //*나중에 에러 처리 & 로딩 처리 넣기
  const { data, error, isLoading, refetch } = useQuery(queryKey, fetchFunction);
  const { setTableData } = useTableContext();

  useEffect(() => {
    let contentData = data;
    let page = null;

    //데이터 정리
    if (data) {
      //pushList는 page, checkbox 없음
      if (queryKey[0] === "pushList") {
      } else {
        contentData = contentData.content.map(addCheckbox);
        page = data.pageable.pageSize;
      }

      //button 추가
      if (addButtonType === "progress_button") {
        contentData = contentData.map(OrderButon);
      } else {
        contentData = contentData.map((item: any) =>
          addTableButton(item, addButtonType)
        );
      }

      setTableData({
        data: contentData,
        page,
        columns,
      });
    }
  }, [data]);

  return { data, error, isLoading, refetch };
}

export default useFetchAndSetTableData;
