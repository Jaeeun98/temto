import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://144.24.95.101:18080/api/v1",
  headers: {
    "Content-Type": "application/json", // 공통된 헤더
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwNDEzMEIzODlBRDg2RkFBQTREMDlENTNGMzRFNUY4NSIsInVzZXJFbWFpbCI6IjA0MTMwQjM4OUFEODZGQUFBNEQwOUQ1M0YzNEU1Rjg1IiwiZXhwIjoxNzI1MzExMTIxLCJpYXQiOjE3MjUyNzUxMjF9.OlWSXeZlKsAlSaoaqm3btzw9287HCU8-6t_5bqK52LU`,
  },
});

//에러 처리 > 추후에 수정하기
axiosInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response) {
      console.error(err.response.data.message || "알수없는 에러");
    } else {
      console.error("알수없는 에러");
    }
    return Promise.reject(err);
  }
);
