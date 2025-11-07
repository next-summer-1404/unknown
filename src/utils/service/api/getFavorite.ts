import http from "../interceptor/axiosClient";
import { FavoriteTypes } from "@/types/FavoriteTypes";

export const getFavorite = async (): Promise<FavoriteTypes> => {
  const response = await http.get<FavoriteTypes>("/favorites/user");
  return response;  
};
