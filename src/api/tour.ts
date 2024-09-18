import { axiosInstance } from "./axiosClient";

//관광지 목록 리스트
export const getTorismList = async (page: number) => {
  const result = await axiosInstance.get(`/tourism/list?page=${page}`);
  return result?.data;
};
