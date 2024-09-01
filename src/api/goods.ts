import { axiosInstance } from "./axiosClient";

export const getGoodsList = async (page: number) => {
  const result = await axiosInstance.get(`/goods/list?page=${page}`);
  return result?.data;
};
