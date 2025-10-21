import http from "../interceptor/axiosClient";
import { HousesQueryParams } from "@/types/IHouses";

export const getRentHouse = async (params?: HousesQueryParams) => {
  const  data  = await http.get("/houses?transactionType=[rental, mortgage]", { params });
  return data;
};


