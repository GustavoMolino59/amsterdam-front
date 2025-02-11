import type { AxiosError } from "axios";

export default class Error {
  message: string;

  response: AxiosError;

  constructor(message: string, response: AxiosError) {
    this.message = message;
    this.response = response;
  }
}