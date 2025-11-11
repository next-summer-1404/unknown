import http from "../interceptor/axiosClient";
import { PaymentsResponse} from "@/types/PaymentType ";

export const getPayments = async (): Promise<PaymentsResponse> => {
  const response = await http.get<PaymentsResponse>("/payments");
  return response;  
};
