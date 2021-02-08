export interface ICredentials {
  email: string;
  password: string;
  userName?: string;
}

export interface IUser {
  uid: string;
  email: string;
}

export interface IUserResponse extends IUser {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export interface IUserData {
  userName: string;
}
