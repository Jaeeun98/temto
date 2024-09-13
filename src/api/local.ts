import { axiosInstance } from "./axiosClient";

//특산품 리스트
export const getLocalList = async (page: number) => {
  const result = await axiosInstance.get(`/local-item/list?page=${page}`);
  return result?.data;
};
