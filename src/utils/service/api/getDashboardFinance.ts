import { FinanceTypes } from "@/types/FinanceTypes";
import http from "../interceptor/axiosClient";
 {/*check*/}
export const getDashboardFinance = async (): Promise<FinanceTypes> => {
  const res = await http.get<FinanceTypes>("/seller/finance/dashboard");
  console.log(res ,'rrrrrrrrrrr') 
  return res
};
