import http from "../../interceptor/axiosClient";
import { ILoginRequest, ILoginResponse } from "../../../../types/LoginTypes";

const LoginApi = async (data: ILoginRequest): Promise<ILoginResponse> => {
  try {
    const res = await http.post<ILoginResponse>("/auth/login", data);
    return res.data;
  } catch (error) {
    return { success: false, message: "خطا در لاگین" };
  }
};

export default LoginApi;
