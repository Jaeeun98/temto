import { axiosInstance, formAxiosInstance } from "./axiosClient";

//특산품 리스트
export const getLocalOfferList = async (page: number) => {
  const result = await axiosInstance.get(`/give-local-item/list?page=${page}`);
  return result?.data;
};

//특산품 등록
export const localOfferAdd = async (LocalDetailData: FormData) => {
  const result = await formAxiosInstance.post(
    `/give-local-item`,
    LocalDetailData
  );
  return result?.data;
};

//특산품 상세
export const getLocalOfferDetailList = async (LocalId: string) => {
  const result = await axiosInstance.get(`/give-local-item/list/${LocalId}`);
  return result?.data;
};

//특산품 수정
export const localOfferModify = async (
  id: string,
  LocalDetailData: FormData
) => {
  const result = await formAxiosInstance.put(
    `/give-local-item/${id}`,
    LocalDetailData
  );
  return result?.data;
};

//특산품 삭제
export const localOfferDelete = async (LocalId: string) => {
  const result = await axiosInstance.delete(`/give-local-item/${LocalId}`);
  return result;
};
