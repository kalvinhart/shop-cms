import { User, UserCredentials } from "../../types/Auth";

export interface IAuthService {
  signIn({ email, password }: UserCredentials): Promise<User>;
  signOut(): void;
}
