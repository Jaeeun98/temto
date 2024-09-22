import { axiosInstance } from "./axiosClient";

//로그인
export const login = async (loginData: any) => {
  const result = await axiosInstance.post(`/admin/login`, loginData);
  return result;
};

//상단 지역명 조회
export const userAreaCode = async () => {
  const result = await axiosInstance.get(`/user-area-code`);
  return result?.data;
};
