import http from "../../../interceptor/axiosClient";``

const VerifyEmailApi = async (data: { tempUserId: string,verificationCode:string }) => {
  try {
    const res = await http.post("/auth/verify-email", data);
    return res;
  } catch (error: any) {
    console.error("Register API Error:", error?.response?.data || error.message);
    return null;
  }
};

export default VerifyEmailApi;
