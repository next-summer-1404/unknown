import { CompleteRegistrationType } from "@/types/CompleteRegistrationType";
import http from "../../../interceptor/axiosClient";

interface IRegistration {
  userId: string | null
  password: string | null;
  phoneNumber: string | null;
}

const CompleteRegistrationApi = async (data: IRegistration) => {
  try {
    const res = await http.post<CompleteRegistrationType>(
      "/auth/complete-registration",
      data
    );
    return res;
  } catch (error: any) {
    console.log("Register API Error:", error?.response?.data || error.message);
    return null;
  }
};

export default CompleteRegistrationApi;
