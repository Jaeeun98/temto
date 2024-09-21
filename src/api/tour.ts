import { axiosInstance } from "./axiosClient";

//관광지 목록 리스트
export const getTorismList = async (page: number) => {
  const result = await axiosInstance.get(`/tourism/list?page=${page}`);
  return result?.data;
};

//굿즈 삭제
export const torismDelete = async (tourismId: string) => {
  const result = await axiosInstance.delete(`/tourism/${tourismId}`);
  return result;
};
