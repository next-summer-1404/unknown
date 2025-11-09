import http from "../interceptor/axiosClient";
import {ICommentsParams} from "@/types/ICommentCardProps"

export const getComments = async (params?: ICommentsParams) => {
  const  result  = await http.get("/comments", { params});
  return result;
};


