import { axiosInstance } from "./axiosClient";

//푸시 리스트
export const getPushList = async () => {
  const result = await axiosInstance.get(`/push`);
  return result?.data;
};

export const getDetailPushData = async (pushId: string) => {
  const result = await axiosInstance.get(`/push/${pushId}`);
  return result?.data;
};

export const addPush = async (pushData: any) => {
  const result = await axiosInstance.post(`/push`, pushData);
  return result;
};
