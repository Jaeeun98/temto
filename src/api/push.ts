import { axiosInstance } from "./axiosClient";

//푸시 리스트
export const getPushList = async (page: number) => {
  const result = await axiosInstance.get(`/push?page=${page}`);
  return result?.data;
};
