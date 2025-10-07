import http from "../../interceptor/axiosClient";  //changed

const LoginApi = async (data) => {
  try {
    const res = await http.post("/auth/login", data);
    return res.data; 
  } catch (error) {
    return { success: false, message: "خطا در لاگین" };
  }
};

export default LoginApi;
