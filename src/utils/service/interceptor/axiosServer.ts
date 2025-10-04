import axios, { AxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function axiosServer(url: string, options: AxiosRequestConfig = {}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const headers = { ...(options.headers || {}) };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const instance = axios.create({
    baseURL,
    headers,
  });

  return instance(url, options);
}
