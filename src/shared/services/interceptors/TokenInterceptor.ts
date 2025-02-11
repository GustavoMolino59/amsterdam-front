import type { InternalAxiosRequestConfig } from 'axios';
import UserStorageService from '../auth/UserStorageService';


export default function TokenInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  const token = UserStorageService.getToken();

  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }

  return config;
}