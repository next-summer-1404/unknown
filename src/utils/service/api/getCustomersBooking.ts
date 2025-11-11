import http from "../interceptor/axiosClient";
import { BookingCustomersResponse } from "@/types/BookingCustomersResponse ";

export const getCustomersBooking = async (id: string): Promise<BookingCustomersResponse> => {
  const response = await http.get<BookingCustomersResponse>(`/bookings/${id}/customers`);

  return response;  
};
