import http from "../../../interceptor/axiosClient";``

type VerifyEmailType = {
  message:string
}


const VerifyEmailApi = async (data: { tempUserId: string,verificationCode:string }) => {
  try {
    const res = await http.post<VerifyEmailType>("/auth/verify-email", data);
    return res;
  } catch (error: any) {
    console.log("Register API Error:", error?.response?.data || error.message);
    return null;
  }
};

export default VerifyEmailApi;
