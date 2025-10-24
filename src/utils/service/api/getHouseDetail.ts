import http from "../interceptor/axiosClient";
import { IHouses } from "@/types/IHouses";

export const getHouseDetail = async (id: string): Promise<IHouses> => {
  // console.log(id, "aaa")
  const res = await http.get<IHouses>(`/houses/${id}`);
  return res;
};
