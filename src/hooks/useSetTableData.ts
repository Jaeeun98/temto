import { useEffect } from "react";
import { useQuery } from "react-query";
import { useTableContext } from "../context/table_data_context";
import { addModifyButton } from "../components/common/table_button";

function useFetchAndSetTableData<T>(
  queryKey: [string, any],
  fetchFunction: () => Promise<any>,
  addButton: boolean = true,
  columns: any
) {
  const { data, error, isLoading } = useQuery(queryKey, fetchFunction);
  const { setTableData } = useTableContext();

  useEffect(() => {
    if (data) {
      let contentData = data.content;
      if (addButton) contentData = contentData.map(addModifyButton);

      setTableData({
        data: contentData,
        page: data.pageable.pageSize,
        columns,
      });
    }
  }, [data]);

  return { data, error, isLoading };
}

export default useFetchAndSetTableData;
