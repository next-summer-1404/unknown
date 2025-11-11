import { UsersTypes } from "@/types/UsersTypes";
import http from "../interceptor/axiosClient";

export const getUsers = async (id: string): Promise<UsersTypes> => {
  const res = await http.get<UsersTypes>(`/users/${id}`);
  // console.log(res,'rrrrrrrrrrr')
  return res;
};
