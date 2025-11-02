import { DashboardSummary } from "@/types/DashboardSummary";
import http from "../interceptor/axiosClient";

export const getSummeryStatic = async (): Promise<DashboardSummary> => {
  const response = await http.get<DashboardSummary>("/dashboard/summary");
  return response;  
};
