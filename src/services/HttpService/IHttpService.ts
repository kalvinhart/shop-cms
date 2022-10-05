export interface IHttpService {
  get<T>(url: string): Promise<T>;
  post<T, R>(url: string, data: T): Promise<R>;
}
