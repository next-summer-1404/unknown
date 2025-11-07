import http from "../interceptor/axiosClient";
import { BookingCustomersResponse } from "@/types/BookingCustomersResponse ";

export const getCustomersBooking = async (): Promise<BookingCustomersResponse> => {
  const response = await http.get<BookingCustomersResponse>("/bookings/:id/customers");
  return response;  
};
