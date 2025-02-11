import apiService from "../api/ApiService";
import AUTH_PATHS from "./BaseURLs";
import UserStorageService from "./UserStorageService";


export default class AuthenticationService {
  /**
   * Realiza o login e salva o token no localStorage.
   * @param email Nome de usuário.
   * @param password Senha.
   * @returns O token recebido da API.
   */
  static async login(email: string, password: string): Promise<void> {
    try {
      const { accessToken } = await apiService.post<{ accessToken: string }>(`${AUTH_PATHS.BASE}`, {
        email,
        password,
      });
      UserStorageService.saveToken(accessToken);
    } catch (error) {
      throw error;
    }
  }

  static async validate() {
    try {
      const { valid } = await apiService.get<{valid: boolean}>(AUTH_PATHS.VALIDATE)
      return valid
    } catch (error) {
      throw error;
    }
  }
}