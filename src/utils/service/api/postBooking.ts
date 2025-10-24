import { Booking } from "@/types/Booking";
import http from "../interceptor/axiosClient";

export const postBooking = async (Props:Partial<Booking.DataValues>) => {
  const  data  = await http.post("/bookings" ,Props);
  return data;
};


