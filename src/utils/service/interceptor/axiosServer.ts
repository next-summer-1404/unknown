import axios,  from 'axios';
import { cookies } from 'next/headers';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const http = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

http.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default http;
