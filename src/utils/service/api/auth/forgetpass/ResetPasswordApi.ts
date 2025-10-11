import http from "../../../interceptor/axiosClient";

export interface IResetPasswordType {
  email: string | null
  resetCode: string | null;
  newPassword: string | null;
  message?: string | null;
}

const ResetPasswordApi = async (data: IResetPasswordType) => {
  try {
    const res = await http.post<IResetPasswordType>(
      "/auth/forgot-password/reset",
      data
    );
    return res;
  } catch (error: any) {
    console.log("Register API Error:", error?.response?.data || error.message);
    return null;
  }
};

export default ResetPasswordApi;
