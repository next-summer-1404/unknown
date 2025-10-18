import http from "../interceptor/axiosClient";
import { HousesQueryParams, IHouses } from "@/types/IHouses";

export const getHouses = async (params?: HousesQueryParams) => {
  const  data  = await http.get("/houses", { params });
  return data;
};
