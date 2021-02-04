export interface User {
  uid: string;
  email: string;
  name: string;
}

export interface UserRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserRegisterResponse extends User {
  refreshToken: string;
  /** Please check spelling: should be : accessToken, this version will cause inappropriate app behaviour*/
  accesToken: string;
  expirationTIme: number;
}
