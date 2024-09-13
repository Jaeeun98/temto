import { axiosInstance } from "./axiosClient";

//특산품 리스트
export const getLocalOfferList = async (page: number) => {
  const result = await axiosInstance.get(`/give-local-item/list?page=${page}`);
  return result?.data;
};
