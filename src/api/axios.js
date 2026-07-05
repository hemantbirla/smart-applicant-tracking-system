import axios from "axios";

import env from "../config/env";

const axiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      localStorage.removeItem("accessToken");

      // Refresh token flow will be implemented later
      // window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;