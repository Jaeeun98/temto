import { axiosInstance } from "./axiosClient";

//주문 목록 리스트
export const getOrderList = async (page: number) => {
  const result = await axiosInstance.get(`/order-item/list?page=${page}`);
  return result?.data;
};

//주문 상태 리스트
export const getOrderStatusList = async () => {
  const result = await axiosInstance.get(`/order-item/status`);
  return result?.data;
};

//주문 상태 변경
export const orderStatusChange = async (status: string) => {
  const result = await axiosInstance.put(
    `/order-item/status?orderId=${status}`
  );
  return result?.data;
};
