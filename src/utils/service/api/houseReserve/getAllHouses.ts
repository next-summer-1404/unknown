import { HouseReserveTypes } from "@/types/HouseReserveTypes";
import http from "../../interceptor/axiosClient";

export const getAllHouses = async (): Promise<HouseReserveTypes[]> => {
  const res = await http.get("/houses");
  return res.data.houses;
};
