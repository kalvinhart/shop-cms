import { User, UserCredentials } from "../../types/Auth";

export interface IAuthService {
  signIn({ username, password }: UserCredentials): Promise<User>;
  signOut(): void;
}
