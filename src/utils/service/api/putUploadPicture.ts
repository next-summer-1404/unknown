import {
  UploadProfilePictureRequest,
  UploadProfilePictureResponse,
} from "@/types/TypePicture";
import http from "../interceptor/axiosClient";

export const putUploadPicture = async (value: UploadProfilePictureRequest) => {
  const formData = new FormData();
  formData.append("picture", value.picture);

  const res = await http.put<UploadProfilePictureResponse>(
    "/users/upload/picture",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res;
};
