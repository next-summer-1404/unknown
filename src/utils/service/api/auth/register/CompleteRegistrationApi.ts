import http from "../../../interceptor/axiosClient";

interface IRegistration {
  userId: string;
  password: string;
  phoneNumber: string;
}

const CompleteRegistrationApi = async(data:IRegistration) => {
  try {
    const res = await http.post("/auth/complete-registration", data);
    return res.data;
  } catch (error: any) {
    console.error(
      "Register API Error:",
      error?.response?.data || error.message
    );
    return null;
  }
};

export default CompleteRegistrationApi;
