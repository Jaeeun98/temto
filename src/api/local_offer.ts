import { axiosInstance } from "./axiosClient";

//특산품제공 리스트
export const getLocalOfferList = async (page: number) => {
  const result = await axiosInstance.get(`/give-local-item/list?page=${page}`);
  return result?.data;
};

//특산품명 리스트
export const getLocalNameList = async () => {
  const result = await axiosInstance.get(
    `/give-local-item/give-local-item-name`
  );
  return result?.data;
};

//특산품제공 등록
export const localOfferAdd = async (localDetailData: any) => {
  const result = await axiosInstance.post(`/give-local-item`, localDetailData);
  return result?.data;
};

//특산품제공 상세
export const getLocalOfferDetailList = async (localId: string) => {
  const result = await axiosInstance.get(`/give-local-item/list/${localId}`);
  return result?.data;
};

//특산품제공 수정
export const localOfferModify = async (id: string, localDetailData: any) => {
  const result = await axiosInstance.put(
    `/give-local-item/${id}`,
    localDetailData
  );
  return result?.data;
};

//특산품제공 삭제
export const localOfferDelete = async (localId: string[]) => {
  const result = await axiosInstance.post(
    `/give-local-item/multi-delete`,
    localId
  );
  return result;
};
