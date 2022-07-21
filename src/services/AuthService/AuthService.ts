import { User, UserCredentials } from "../../types/Auth";
import { IHttpService } from "../HttpService/IHttpService";
import { IAuthService } from "./IAuthService";

export default class AuthService implements IAuthService {
  #httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.#httpService = httpService;
  }

  async signIn({ username, password }: UserCredentials): Promise<User> {
    const user = await this.#httpService.post<UserCredentials, User>("/users/login", {
      username,
      password,
    });
    return user;
  }
  signOut(): void {
    throw new Error("Not implemented");
  }
}
