export interface AlertModalState {
  deleteAlert: boolean;
  addAlert?: boolean;
  modifyAlert?: boolean;
}

export type AlertType = keyof AlertModalState;

export type IdTitle =
  | "goodsId"
  | "orderId"
  | "tourPlaceId"
  | "localItemId"
  | "localOfferId"
  | "pushId";
