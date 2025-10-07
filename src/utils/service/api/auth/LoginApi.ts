import http from "../../interceptor/axiosClient";
import { ILoginRequest, ILoginResponse } from "../../../../types/LoginTypes";

const LoginApi = async (data: ILoginRequest): Promise<ILoginResponse | null> => {
  try {
    const res:ILoginResponse  = await http.post("/auth/login", data);
    console.log("Response data:", res.accessToken);
    

    return res;
    
  } catch (error) {
     console.error("LoginApi Error:", error);
  return null;
  }
};

export default LoginApi;
