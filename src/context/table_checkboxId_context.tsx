import React, { createContext, useState, useContext, ReactNode } from "react";

// Context 생성
const CheckboxContext = createContext<any>(null);

// Provider 컴포넌트
export const CheckboxIdProvider = ({ children }: { children: ReactNode }) => {
  const [checkboxId, setCheckboxId] = useState<string[]>([]);

  const value = {
    checkboxId,
    setCheckboxId,
  };

  return (
    <CheckboxContext.Provider value={value}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckboxContext = () => {
  return useContext(CheckboxContext);
};
