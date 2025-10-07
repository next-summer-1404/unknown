import http from "../../../../utils/service/interceptor/axiosServer";

const LoginApi = async (user) => {
  try {
    const res = await http.post("/auth/login", user);
    return res.data; 
  } catch (error) {
    return { success: false, message: "خطا در لاگین" };
  }
};

export default LoginApi;
