import { FinanceTypes } from "@/types/FinanceTypes";
import http from "../interceptor/axiosServer";
{
  /*check*/
}
export const getDashboardFinance = async (): Promise<FinanceTypes> => {
  const res = await http.get<FinanceTypes>("/seller/finance/dashboard");
  // console.log(res ,'rrrrrrrrrrr')
  // console.log(res.config.headers["Authorization"]);
  return res.data;
};
