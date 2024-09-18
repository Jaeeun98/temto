import { axiosInstance } from "./axiosClient";

//로그인
export const login = async (loginData: any) => {
  const result = await axiosInstance.post(`/admin/login`, loginData);
  return result;
};
