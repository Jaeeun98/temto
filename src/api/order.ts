import { axiosInstance } from "./axiosClient";

interface OrderStatusChange {
  orderItemId: string;
  orderStatus: string;
}

//주문 목록 리스트
export const getOrderList = async (page: number) => {
  const result = await axiosInstance.get(`/order-item/list?page=${page}`);
  return result?.data;
};

//주문 삭제
export const orderDelete = async (orderItemIds: any) => {
  const result = await axiosInstance.delete(`/order-item`, orderItemIds);
  return result;
};

//주문 상태 변경
export const orderStatusChange = async (orderStatusData: OrderStatusChange) => {
  const result = await axiosInstance.put(`/order-item`, orderStatusData);
  return result;
};

//주문 상태 리스트
// export const getOrderStatusList = async () => {
//   const result = await axiosInstance.get(`/order-item/status`);
//   return result?.data;
// };
