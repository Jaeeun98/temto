import { axiosInstance } from "./axiosClient";

//특산품제공 리스트
export const getLocalOfferList = async (page: number) => {
  const result = await axiosInstance.get(`/give-local-item/list?page=${page}`);
  return result?.data;
};

//특산품제공 등록
export const localOfferAdd = async (LocalDetailData: any) => {
  const result = await axiosInstance.post(`/give-local-item`, LocalDetailData);
  return result;
};

//특산품제공 상세
export const getLocalOfferDetailList = async (LocalId: string) => {
  const result = await axiosInstance.get(`/give-local-item/list/${LocalId}`);
  return result?.data;
};

//특산품제공 수정
export const localOfferModify = async (LocalDetailData: any) => {
  const result = await axiosInstance.put(`/give-local-item`, LocalDetailData);
  return result;
};

//특산품제공 삭제
export const localOfferDelete = async (LocalId: string) => {
  const result = await axiosInstance.delete(`/give-local-item/${LocalId}`);
  return result;
};
