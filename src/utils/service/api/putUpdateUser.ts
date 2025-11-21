import { UpdateUserRequest, UpdateUserResponse } from "@/types/UpdateUserType";
import http from "../interceptor/axiosClient";

export const putUpdateUser = async (id: string,value: UpdateUserRequest) => {
  const res = await http.put<UpdateUserResponse>(`/users/${id}`, value);
  return res;
};
