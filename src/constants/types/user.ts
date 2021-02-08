export interface ICredentials {
  email: string;
  password: string;
}

/** use I prefix for all Interfaces if you want to follow convention */
export interface User {
  uid: string;
  email: string;
  displayName: string;
}

/** use I prefix for all Interfaces if you want to follow convention */
export interface UserResponse extends User {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}
