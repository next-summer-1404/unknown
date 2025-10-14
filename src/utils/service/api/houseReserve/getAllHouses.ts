import { IHouses } from "@/types/IHouses";
import http from "../../interceptor/axiosClient";

export interface GetAllHousesResponse {
  houses: IHouses[];
  totalCount: number;
}

export const getAllHouses = async (): Promise<GetAllHousesResponse> => {
  const res = await http.get("/houses");
  // console.log(res ,'cccccccc')
  return res
};
