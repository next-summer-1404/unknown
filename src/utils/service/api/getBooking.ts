import { BookingTypes } from "@/types/BookingTypes";
import http from "../interceptor/axiosClient";

export const getBooking = async (): Promise<BookingTypes> => {
  const response = await http.get<BookingTypes>("/bookings");
  return response;  
};
