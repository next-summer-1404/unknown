import { BookingPayload } from "@/types/Booking";
import { toast } from "react-hot-toast";
import http from "../interceptor/axiosClient";

export const postBooking = async (value: BookingPayload) => {
  try {
    const  result  = await http.post("/bookings" ,value);
  return result;
  } catch (error) {
    toast.error("مشکلی پیش آمده");
  }
  
};


