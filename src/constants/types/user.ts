export interface ICredentials {
  email: string;
  password: string;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
}

export interface UserRegisterResponse extends User {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}
