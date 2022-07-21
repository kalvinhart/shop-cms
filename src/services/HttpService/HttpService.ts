import Axios, { AxiosResponse } from "axios";
import { IHttpService } from "./IHttpService";

export default class HttpService implements IHttpService {
  async get<T>(url: string): Promise<T> {
    const response: AxiosResponse = await Axios.get(url);
    return response.data;
  }

  async post<T, R>(url: string, data: T): Promise<R> {
    const response: AxiosResponse = await Axios.post(url, data);
    return response.data;
  }
}
