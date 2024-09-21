import { axiosInstance } from "./axiosClient";

//지역코드
export const getAreaCode = async () => {
  const result = await axiosInstance.get(`/tourism/area-code/list`);
  return result.data;
};

//지역 상세 코드
export const getAreaDetailCode = async (areaCodeId: string) => {
  const result = await axiosInstance.get(`/tourism/detail-code/${areaCodeId}`);
  return result?.data;
};
