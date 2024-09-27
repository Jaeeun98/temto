import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";

interface Content {
  [key: string]: string;
}

//columns type 다시 설정
interface TableData {
  data: Content[];
  columns: any; //추후에 다시 작성
  page: any;
}

interface TableProviderType {
  tableData: TableData;
  setTableData: React.Dispatch<React.SetStateAction<TableData>>;
}

const TableContext = createContext<TableProviderType | undefined>(undefined);

//table data
export const TableProvider = ({ children }: { children: ReactNode }) => {
  const [tableData, setTableData] = useState<TableData>({
    data: [],
    columns: [],
    page: {
      totalPage: 0,
      nowPage: 0,
    },
  });

  return (
    <TableContext.Provider value={{ tableData, setTableData }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};
