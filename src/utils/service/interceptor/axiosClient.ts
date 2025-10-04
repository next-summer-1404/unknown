// src/lib/axiosClient.ts
import axios, { InternalAxiosRequestConfig, AxiosHeaders } from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({ baseURL });

// Response interceptor
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      Cookies.remove("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Request interceptor
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // فقط کلاینت
    const token = Cookies.get("token");

    if (!config.headers) {
      config.headers = new AxiosHeaders();
    }

    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
