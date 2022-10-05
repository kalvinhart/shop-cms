export type User = {
  email: string;
  role: string;
  token: string;
};

export type UserCredentials = {
  email: string;
  password: string;
  token?: string;
};

export type AuthError = {
  error: boolean;
  message: string;
};
