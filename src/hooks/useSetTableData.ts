import { useEffect } from "react";
import { useQuery } from "react-query";
import { useTableContext } from "../context/table_data_context";
import { addTableButton } from "../components/common/table_button";
import { addCheckbox } from "../components/common/table_checkbox";

//테이블 데이터 처리
function useFetchAndSetTableData<T>(
  queryKey: [string, any],
  fetchFunction: () => Promise<any>,
  addButton: boolean = true,
  columns: any
) {
  //*나중에 에러 처리 & 로딩 처리 넣기
  const { data, error, isLoading } = useQuery(queryKey, fetchFunction);
  const { setTableData } = useTableContext();

  useEffect(() => {
    let contentData = data;
    let page = null;
    let keyText = "detail_button";

    if (data) {
      //pushList는 page, checkbox 없음
      if (queryKey[0] === "pushList") {
      } else {
        contentData = contentData.content.map(addCheckbox);
        page = data.pageable.pageSize;
        keyText = "modify_button";
      }

      if (addButton)
        contentData = contentData.map((item: any) =>
          addTableButton(item, keyText)
        );

      setTableData({
        data: contentData,
        page,
        columns,
      });
    }
  }, [data]);

  return { data, error, isLoading };
}

export default useFetchAndSetTableData;
