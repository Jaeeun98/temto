import { useState } from "react";

interface AlertModalState {
  deleteAlert?: boolean;
  addAlert?: boolean;
  modifyAlert?: boolean;
}
export const useAlertModal = (initialState: AlertModalState) => {
  const [alertModal, setAlertModal] = useState(initialState);

  const handleAlertModal = (alertType: keyof AlertModalState) => {
    setAlertModal((prev) => ({
      ...prev,
      [alertType]: !prev[alertType], // 해당 alertType의 값을 토글
    }));
  };

  return { alertModal, handleAlertModal };
};
