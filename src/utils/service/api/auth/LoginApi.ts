import http from "../../interceptor/axiosClient";
import { ILoginRequest, ILoginResponse } from "../../../../types/LoginTypes";

const LoginApi = async (data: ILoginRequest): Promise<ILoginResponse | null> => {
  try {
    const res = await http.post<ILoginResponse>("/auth/login", data);
    console.log("Response data:", res.data.accessToken);

    return res.data;
    
  } catch (error) {
     console.error("LoginApi Error:", error);
  return null;
  }
};

export default LoginApi;
