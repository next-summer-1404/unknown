import { GetSellerHousesResponse } from "@/types/SellerUserType";
import http from "../interceptor/axiosClient";

export const getSellerUser = async (): Promise<GetSellerHousesResponse> => {
  const response = await http.get<GetSellerHousesResponse>("/houses/seller/user");
  return response;
};
