import { axiosInstance } from "./axiosClient";

//주문 목록 리스트
export const getOrderList = async (page: number) => {
  const result = await axiosInstance.get(`/order-item/list?page=${page}`);
  return result?.data;
};
