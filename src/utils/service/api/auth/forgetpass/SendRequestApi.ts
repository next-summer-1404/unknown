import http from "../../../interceptor/axiosClient";

type sendRequestType =  {message: string}

const SendRequestApi = async (data: { email: string }) => {
  try {
    const res = await http.post<sendRequestType>("/forgot-password/request", data);
    return res;
  } catch (error: any) {
    console.log(
      "Register API Error:",
      error?.response?.data || error.message
    );
    return error?.response?.data || null;
  }
};

export default SendRequestApi;
