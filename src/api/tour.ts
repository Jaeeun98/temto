import { axiosInstance, formAxiosInstance } from "./axiosClient";

//관광지 목록 리스트
export const getTourismList = async (page: number) => {
  const result = await axiosInstance.get(`/tourism/list?page=${page}`);
  return result?.data;
};

//관광지 상세
export const getTourismDetailList = async (tourismId: string) => {
  const result = await axiosInstance.get(`/tourism/list/${tourismId}`);
  return result?.data;
};

//관광지 삭제
export const tourismDelete = async (tourismId: string) => {
  const result = await axiosInstance.delete(`/tourism/${tourismId}`);
  return result;
};

//관광지 등록
export const tourismAdd = async (tourDetailData: FormData) => {
  const result = await formAxiosInstance.post(`/tourism`, tourDetailData);
  return result;
};

//관광지 수정
export const tourismModify = async (id: string, tourDetailData: FormData) => {
  const result = await formAxiosInstance.put(`/tourism/${id}`, tourDetailData);
  return result?.data;
};

export const getBadgeCodeList = async () => {
  const result = await axiosInstance.get(`/badge/list`);
  return result?.data;
};
