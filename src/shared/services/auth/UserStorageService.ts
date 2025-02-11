import { jwtDecode } from "jwt-decode";
interface TokenPayload {
  name: string;
  exp: number;  // Expiração do token (caso precise validar)
}
export default class UserStorageService {
  private static readonly TOKEN_KEY = 'access_token';

  /**
   * Armazena o token no localStorage.
   * @param token O token de autenticação.
   */
  static saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Obtém o token do localStorage.
   * @returns O token ou `null` se não estiver presente.
   */
  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Remove o token do localStorage.
   */
  static removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  static getName(): string {
    const token = this.getToken()
    if (token) {
      const payload:TokenPayload = jwtDecode(token)
      return payload.name;
    }
    return ''
  }
}