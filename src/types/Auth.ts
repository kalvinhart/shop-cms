export type User = {
  email: string;
  role: string;
  token: string;
};

export type UserCredentials = {
  username: string;
  password: string;
  token?: string;
};
