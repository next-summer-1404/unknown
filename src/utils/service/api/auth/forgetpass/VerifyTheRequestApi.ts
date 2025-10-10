import http from "../../../interceptor/axiosClient";

export type VerifyTheRequestType = {
  message:string
  resetCode: string;
  email: string;
}


const VerifyTheRequestApi = async (data: { email: string,resetCode:string }) => {
  try {
    const res = await http.post<VerifyTheRequestType>("/auth/forgot-password/verify", data);
    return res;
  } catch (error: any) {
    console.log("Register API Error:", error?.response?.data || error.message);
    return null;
  }
};

export default VerifyTheRequestApi;
