import http from "../interceptor/axiosClient";
import { ChangePasswordRequest, ChangePasswordResponse } from "@/types/ChangePassword";

export const putPassword = async (value: ChangePasswordRequest) => {
  const res = await http.put<ChangePasswordResponse>("/users/change-password", value);
  return res;
};
