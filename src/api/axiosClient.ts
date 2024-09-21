import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://144.24.95.101:18080/api/v1",
  headers: {
    "Content-Type": "application/json", // 공통된 헤더
  },
});

export const formAxiosInstance = axios.create({
  baseURL: "http://144.24.95.101:18080/api/v1",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// 토큰 가져오기
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 토큰 가져오기
formAxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//에러 처리 > 추후에 수정하기
axiosInstance.interceptors.response.use(
  //응답 성공시
  (response) => response,

  //응답 실패시
  (err) => {
    if (err.response) {
      console.log(err);
      if (err.response?.status === 401) {
        alert("로그인이 만료되었습니다.");
        localStorage.removeItem("accessToken");
        window.location.href = "/";
      } else {
        alert(err.response.data.errorMessage);
        return;
        // return Promise.reject(err);
      }
    }
  }
);
