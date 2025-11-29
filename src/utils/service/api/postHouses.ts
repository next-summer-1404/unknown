import { PostHousesType } from "@/types/PostHousesType";
import http from "../interceptor/axiosClient";

export const postHouses = async (value: any) => {
  const res = await http.post("/houses", value);

  return res;
};
