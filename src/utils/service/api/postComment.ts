import http from "../interceptor/axiosClient";
import { toast } from "react-hot-toast";
import { ICommentsData } from "@/types/ICommentsData";

 export const PostComment = async(value:ICommentsData)=>{
    try {
        const result = await http.post('/comments',value)
        return result
    } catch (error) {
        toast.error(error.response.data.ErrorMessage[0])
    }
}



