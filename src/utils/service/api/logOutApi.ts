import http from "../interceptor/axiosClient";

export const logOutApi = async () => {
  const res = await http.post("/auth/logout");
  console.log("logout response ==>", res);
  return res;
};
