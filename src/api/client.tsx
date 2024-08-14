import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { toast, ToastContainer } from "react-toastify";

export const baseURL = "http://localhost:8000/";


const client = axios.create({ baseURL: baseURL });

// Add a request interceptor7
client.interceptors.request.use(
  (config: AxiosRequestConfig<any>): any => {
    const token = localStorage.getItem("token");
    if (token) {
      const accessToken = JSON.parse(token);
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  (error: AxiosError<any>) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<any>) => {
    if (error.response?.data?.message) toast.error(error.response.data.message);
    return Promise.reject(error);
  }
);

const responseBody = <T,>(response: AxiosResponse<T>) => response.data;

export const requests = {
  get: <T,>(url: string) => client.get<T>(url).then(responseBody),
  post: <T,>(url: string, body?: {}) =>
    client.post<T>(url, body).then(responseBody),
  put: <T,>(url: string, body: {}) =>
    client.put<T>(url, body).then(responseBody),
  del: <T,>(url: string) => client.delete<T>(url).then(responseBody),
};
