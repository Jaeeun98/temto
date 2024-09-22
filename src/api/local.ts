import { axiosInstance, formAxiosInstance } from "./axiosClient";

//특산품 리스트
export const getLocalList = async (page: number) => {
  const result = await axiosInstance.get(`/local-item/list?page=${page}`);
  return result?.data;
};

//특산품 상세
export const getLocalDetailList = async (LocalId: string) => {
  const result = await axiosInstance.get(`/local-item/list/${LocalId}`);
  return result?.data;
};

//특산품 등록
export const localAdd = async (LocalDetailData: FormData) => {
  const result = await formAxiosInstance.post(`/local-item`, LocalDetailData);
  return result?.data;
};

//특산품 수정
export const localModify = async (id: string, LocalDetailData: FormData) => {
  const result = await formAxiosInstance.put(
    `/local-item/${id}`,
    LocalDetailData
  );
  return result?.data;
};

//특산품 삭제
export const localDelete = async (LocalId: string) => {
  const result = await axiosInstance.delete(`/local-item/${LocalId}`);
  return result;
};
