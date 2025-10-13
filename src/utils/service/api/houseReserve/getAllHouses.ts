import { HouseReserveTypes } from "../../../../types/HouseReserveTypes";
import http from "../../interceptor/axiosClient";

export interface GetAllHousesResponse {
  houses: HouseReserveTypes[];
  totalCount: number;
}

export const getAllHouses = async (): Promise<GetAllHousesResponse> => {
  const res = await http.get("/houses");
  // console.log(res ,'cccccccc')
  return res
};
