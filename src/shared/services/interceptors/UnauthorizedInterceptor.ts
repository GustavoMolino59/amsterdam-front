import type { AxiosError, AxiosResponse } from 'axios';
import router from '@/router'; // Importa o router para redirecionamento

/**
 * Interceptor para lidar com respostas não autorizadas (401).
 * @param error Erro capturado na resposta Axios.
 * @returns Rejeição do erro ou redirecionamento.
 */
export default function UnauthorizedInterceptor(error: AxiosError): Promise<AxiosResponse> {
  if (error.response?.status === 401) {
    console.error('Usuário não autorizado, redirecionando para /login.');
    router.push('/login'); // Redireciona para a página de login
  }

  return Promise.reject(error); // Propaga o erro para o chamador
}