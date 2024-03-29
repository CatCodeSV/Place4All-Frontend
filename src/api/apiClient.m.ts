import { useUser } from '@/composables/useUser';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface IdValue {
  id: number;
  value: string;
}

const apiUrl = import.meta.env.VITE_API_URL;
const injectToken = (config: AxiosRequestConfig): any => {
  try {
    const { token } = useUser();
    if (token.value) {
      config.headers!.Authorization = `Bearer ${token.value}`;
    }
    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};

const isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;

function isIsoDateString(value: any): boolean {
  return value && typeof value === 'string' && isoDateFormat.test(value);
}

export function handleDates(body: any) {
  if (body === null || body === undefined || typeof body !== 'object') return body;

  for (const key of Object.keys(body)) {
    const value = body[key];
    if (isIsoDateString(value)) body[key] = (value as string).split('T')[0];
    else if (typeof value === 'object') handleDates(value);
  }
}

class Place4AllHttpClient {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: apiUrl,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    http.interceptors.request.use(injectToken, error => Promise.reject(error));

    http.interceptors.response.use(
      response => {
        handleDates(response.data);
        return response;
      },
      error => {
        return Promise.reject(error);
      }
    );

    this.instance = http;
    return http;
  }

  get<T = any, R = AxiosResponse<T>>(url: string): any {
    return this.http.get<T, R>(url);
  }

  //T es el tipo de dato que devuelve el método
  getAll<T = any, R = AxiosResponse<T[]>>(url: string, urlSuffix?: string): any {
    return this.http.get<T[], R>(`${url}${urlSuffix ? urlSuffix : ''}`);
  }

  getIdValues<T = IdValue, R = AxiosResponse<T[]>>(url: string): any {
    return this.getAll<T, R>(url);
  }

  getById<T = any, R = AxiosResponse<T>>(url: string, id: number | string): any {
    return this.http.get<T, R>(`${url}/${id}`);
  }

  postWId<T = number, R = AxiosResponse<number>, T1 = any>(url: string, data: T1): any {
    return this.http.post<T, R>(url, data);
  }

  post<T = any, R = AxiosResponse<T>, T1 = any>(url: string, data: T1): any {
    return this.http.post<T, R>(url, data);
  }

  put<T = any, R = AxiosResponse<T>, T1 = any>(url: string, data: T1): any {
    return this.http.put<T, R>(url, data);
  }

  putEntity<T = any, R = AxiosResponse<T>, T1 = any>(url: string, entityId: number, data: T1): any {
    return this.put<T, R>(`${url}/${entityId}`, data);
  }

  deleteById<T = any, R = AxiosResponse<T>>(url: string, id: number | string): any {
    return this.http.delete<T, R>(`${url}/${id}`);
  }

  add<T = void, R = AxiosResponse<T>>(url: string, childType: string, parentId: number, childId: number): any {
    return this.http.post<T, R>(`${url}/${parentId}/${childType}/${childId}`);
  }

  remove<T = void, R = AxiosResponse<T>>(url: string, childType: string, parentId: number, childId: number): any {
    return this.http.delete<T, R>(`${url}/${parentId}/${childType}/${childId}`);
  }
}

export const apiClient = new Place4AllHttpClient();
