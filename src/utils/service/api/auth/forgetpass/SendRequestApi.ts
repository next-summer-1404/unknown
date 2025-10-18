import axios from "axios";
import http from "../../../interceptor/axiosClient";

type sendRequestType = { message: string };

const SendRequestApi = async (data: { email: string }) => {
  try {
    const res = await http.post<sendRequestType>("/auth/forgot-password/request", data);
    return res;
  } catch (error: any) {
    console.log("Register API Error:", error?.response?.data || error.message);
    return error?.response?.data || null;
  }
};

export default SendRequestApi;
