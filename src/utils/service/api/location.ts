import { ILocationQueryParams } from "@/types/ILocation";
import { ILocation } from "@/types/ILocation";
import http from "../interceptor/axiosClient";

export const getAllLocation = async (
  params: ILocationQueryParams
): Promise<ILocation[]> => {
  try {
    const result = await http.get<ILocation[]>(
      `/locations?page=${params.page}&limit=${params.limit}`
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
