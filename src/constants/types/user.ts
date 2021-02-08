export interface ICredentials {
  email: string;
  password: string;
}

export interface IUser {
  uid: string;
  email: string;
  displayName: string;
}

export interface IUserResponse extends IUser {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}
