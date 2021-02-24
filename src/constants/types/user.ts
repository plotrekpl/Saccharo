import { IDrink } from './drink';

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegisterCredentials extends ILoginCredentials {
  name: string;
}

export interface IUser {
  uid: string;
  email: string;
  name: string;
  avatar?: string;
  drinks?: IDrink[];
}

export interface IUserResponse {
  user: IUser;
  auth: IAuth;
}

export interface IAuth {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}
