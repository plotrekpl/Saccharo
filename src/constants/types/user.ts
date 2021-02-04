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
  accesToken: string;
  expirationTIme: number;
}
