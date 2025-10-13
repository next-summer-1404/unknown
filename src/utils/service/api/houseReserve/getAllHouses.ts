import { HouseReserveTypes } from "@/types/HouseReserveTypes";
import http from "../../interceptor/axiosClient";

export const getAllHouses = async (): Promise<HouseReserveTypes[]> => {
  const res = await http.get("/api/houses");
  // طبق Postman: houses داخل data هست
  return res.data.houses;
};
