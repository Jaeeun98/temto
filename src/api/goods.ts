import { axiosInstance, formAxiosInstance } from "./axiosClient";

//굿즈 목록 리스트
export const getGoodsList = async (page: number) => {
  const result = await axiosInstance.get(`/goods/list?page=${page}`);
  return result?.data;
};

//굿즈 상세
export const getGoodsDetailList = async (goodsId: string) => {
  const result = await axiosInstance.get(`/goods/list/${goodsId}`);
  return result?.data;
};

//굿즈 등록
export const goodsAdd = async (goodsDetailData: FormData) => {
  console.log("goodsDetailData", goodsDetailData);
  const result = await formAxiosInstance.post(`/goods`, goodsDetailData);
  return result?.data;
};

//굿즈 수정
export const goodsModify = async (id: string, goodsDetailData: FormData) => {
  const result = await formAxiosInstance.put(`/goods/${id}`, goodsDetailData);
  return result?.data;
};

//굿즈 삭제
export const goodsDelete = async (goodsId: string) => {
  const result = await axiosInstance.delete(`/goods/${goodsId}`);
  return result;
};
