import { axiosInstance } from "./axiosClient";

//푸시 리스트
export const getPushList = async () => {
  const result = await axiosInstance.get(`/push`);
  return result?.data;
};
