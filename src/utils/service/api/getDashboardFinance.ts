import { FinanceTypes } from "@/types/FinanceTypes";
import http from "../interceptor/axiosClient";

export const getDashboardFinance = async (): Promise<FinanceTypes> => {
  const res = await http.get<FinanceTypes>("/seller/finance/dashboard");
  console.log(" Dashboard Summary:", res);

  return res
};
