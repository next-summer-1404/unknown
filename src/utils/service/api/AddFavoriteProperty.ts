import http from "../interceptor/axiosClient";
import { toast } from "react-hot-toast";
import { IAddFavoriteParams } from "@/types/IAddFavoriteParams";

export const AddFavoriteProperty = async (value: IAddFavoriteParams) => {
  try {
    const result = await http.post("/favorites", value);
    return result;
  } catch (error) {
    toast.error(error.response.data.ErrorMessage[0]);
  }
};
