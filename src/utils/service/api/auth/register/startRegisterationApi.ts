import http from "../../../interceptor/axiosClient";

type startRegisterationType = Record<"tempUserId" | "message", string>;

const startRegisterationApi = async (data: { email: string }) => {
  try {
    const res = await http.post<startRegisterationType>("/auth/register", data);
    return res;
  } catch (error: any) {
    console.log(
      "Register API Error:",
      error?.response?.data || error.message
    );
    return null;
  }
};

export default startRegisterationApi;
