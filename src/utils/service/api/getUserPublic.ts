import http from "../interceptor/axiosClient";
import { UserPublicTypes } from "@/types/UserPublicTypes ";

export const getUserPublic = async (id: string): Promise<UserPublicTypes> => {
  const res = await http.get<UserPublicTypes>(`/users/${id}/public`);
  return res;
};
