import http from "../../../interceptor/axiosClient";

const startRegisterationApi = async (data: { email: string }) => {
  try {
    const res = await http.post("/auth/register", data);
    return res;
  } catch (error: any) {
    console.error("Register API Error:", error?.response?.data || error.message);
    return null;
  }
};

export default startRegisterationApi;
