import type { SearchParamOptions } from "@/types";
import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WP_API_URL,
  timeout: 5000000,
  headers: {
    "Content-Type": "application/json",
  },
});

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    console.log(`Here`, url, data, options);
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await Axios.delete<T>(url);
    return response.data;
  }

  static formatSearchParams(params: Partial<SearchParamOptions>) {
    return Object.entries(params)
      .filter(([, value]) => Boolean(value))
      .map(([k, v]) =>
        ["type", "categories", "tags", "author", "manufacturer"].includes(k)
          ? `${k}.slug:${v}`
          : `${k}:${v}`
      )
      .join(";");
  }
}
