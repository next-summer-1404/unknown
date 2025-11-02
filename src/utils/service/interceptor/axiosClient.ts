// src/lib/axiosClient.ts
import axios, {
  InternalAxiosRequestConfig,
  AxiosHeaders,
  AxiosInstance,
} from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({ baseURL });

// Response interceptor
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      Cookies.remove("accessToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Request interceptor
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // فقط کلاینت
    const token = Cookies.get("accessToken");

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

type AxiosResponseData<T> = Promise<T>;

export default instance as Omit<
  AxiosInstance,
  "get" | "post" | "delete" | "put"
> & {
  get<T = any>(
    ...args: Parameters<AxiosInstance["get"]>
  ): AxiosResponseData<T>;
  post<T = any>(
    ...args: Parameters<AxiosInstance["post"]>
  ): AxiosResponseData<T>;
  put<T = any>(
    ...args: Parameters<AxiosInstance["put"]>
  ): AxiosResponseData<T>;
  delete<T = any>(
    ...args: Parameters<AxiosInstance["delete"]>
  ): AxiosResponseData<T>;
};
