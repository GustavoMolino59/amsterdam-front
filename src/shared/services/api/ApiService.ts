import axios from 'axios';
import type {
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
} from 'axios';
import TokenInterceptor from '../interceptors/TokenInterceptor';
import Error from '@/shared/models/Error';
import UnauthorizedInterceptor from '../interceptors/UnauthorizedInterceptor';

class ApiService {
  private readonly http: AxiosInstance;

  constructor(config: CreateAxiosDefaults) {
    this.http = axios.create(config);
    this.http.interceptors.request.use(TokenInterceptor, (error) => Promise.reject(error));
    this.http.interceptors.response.use(
      (response) => response,
      UnauthorizedInterceptor
    );  }

  private static handleError(error: Error): never {
    throw new Error(`Erro na requisição: ${error.message}`, error.response);
  }

  public async get<T>(resource: string, params?: object): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.get(resource, { params });
      return response.data;
    } catch (error) {
      const err = error as Error;
      ApiService.handleError(err);
    }
  }

  public async post<T>(resource: string, data?: object): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.post(resource, data);
      return response.data;
    } catch (error) {
      const err = error as Error;
      ApiService.handleError(err);    }
  }
}

// Instância da API com configurações do .env
const apiService = new ApiService({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: parseInt(import.meta.env.VITE_REQUEST_TIMEOUT || '10000', 10),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiService;
