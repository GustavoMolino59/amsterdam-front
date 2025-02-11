import apiService from "../api/ApiService";
import USER_PATHS from "./BaseURLS";

interface ICreateUserParams {
  name: string,
  email: string,
  password: string,
  year: number,
}
export class UsersService {

  static async create(params: ICreateUserParams) {
    try {
      const data = await apiService.post(USER_PATHS.CREATE, params)
      return data;
    } catch(error) {
      throw error;
    }
  }
}