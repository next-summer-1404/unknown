import { ILocationQueryParams } from "@/types/ILocation";
import { IGetAllLocationResponse } from "@/types/ILocation";
import http from "../interceptor/axiosClient";

export const getAllLocation = async (
  params: ILocationQueryParams
): Promise<IGetAllLocationResponse> => {
  try {
    const result = await http.get<IGetAllLocationResponse>(
      `/locations?page=${params.page}&limit=${params.limit}`
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
