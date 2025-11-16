import http from "../interceptor/axiosClient";
import { toast } from "react-hot-toast";
import { ICommentsParams } from "@/types/ICommentsParams";

export const PostComment = async (value: ICommentsParams) => {
  try {
    const result = await http.post("/comments", value);
    return result;
  } catch (error) {
    toast.error(error.response.data.ErrorMessage[0]);
  }
};
