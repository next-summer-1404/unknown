import http from "../interceptor/axiosClient";
import { HousesQueryParams, IHouses } from "@/types/IHouses";

export const getHouses = async (
  params: HousesQueryParams
): Promise<IHouses[]> => {
  try {
    const queryObj: Record<string, any> = {};
    if(params.page != null) queryObj.page = params.page;
    if(params.limit != null) queryObj.limit = params.limit;
    if(params.transactionType && params.transactionType.length > 0) queryObj.transactionType = params.transactionType;
    if(params.search) queryObj.search = params.search;
    if(params.order) queryObj.order = params.order;
    if(params.sort) queryObj.sort = params.sort;
    if(params.propertyType) queryObj.propertyType = params.propertyType;
    if(params.location) queryObj.location = params.location;
    if(params.minPrice != null) queryObj.minPrice = params.minPrice;
    if(params.maxPrice != null) queryObj.maxPrice = params.maxPrice;
    if(params.minRent != null) queryObj.minRent = params.minRent;
    if(params.maxRent != null) queryObj.maxRent = params.maxRent;
    if(params.minMortgage != null) queryObj.minMortgage = params.minMortgage;
    if(params.maxMortgage != null) queryObj.maxMortgage = params.maxMortgage;
    if(params.minArea != null) queryObj.minArea = params.minArea;
    if(params.maxArea != null) queryObj.maxArea = params.maxArea;

    const result = await http.get<IHouses[]>("/houses", {
      params: queryObj,
    });

    return result;
  } catch (error) {
    console.log(error);
     return [];
  }
};
