import { Booking } from "@/types/IBooking";
import http from "../interceptor/axiosClient";

export const postBooking = async (Props:Booking.DataValues) => {
  const  data  = await http.post("/bookings" ,Props);
  return data;
};


