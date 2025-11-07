import { NotificationTypes } from "@/types/NotificationTypes";
import http from "../interceptor/axiosClient";

export const getNotifications = async (): Promise<NotificationTypes> => {
  const response = await http.get<NotificationTypes>("/notifications");
  return response;  
};
