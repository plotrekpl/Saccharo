import { ICredentials, UserResponse } from '../../constants';

// -------------- USER REGISTER ----------------
export const USER_REGISTER_STARTED = 'USER_REGISTER_STARTED';
export const USER_REGISTER_PENDING = 'USER_REGISTER_PENDING';
export const USER_REGISTER_RESOLVED = 'USER_REGISTER_RESOLVED';
export const USER_REGISTER_REJECTED = 'USER_REGISTER_REJECTED';
// ---------------- USER LOGIN -----------------
export const USER_LOGIN_STARTED = 'USER_LOGIN_STARTED';
export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING';
export const USER_LOGIN_RESOLVED = 'USER_LOGIN_RESOLVED';
export const USER_LOGIN_REJECTED = 'USER_LOGIN_REJECTED';

// -------------- USER REGISTER ----------------
export interface UserRegisterStarted {
  type: typeof USER_REGISTER_STARTED;
  payload: ICredentials;
}
export interface UserRegisterPending {
  type: typeof USER_REGISTER_PENDING;
}
export interface UserRegisterResolved {
  type: typeof USER_REGISTER_RESOLVED;
  payload: UserResponse;
}
export interface UserRegisterRejected {
  type: typeof USER_REGISTER_REJECTED;
  payload: string;
}
// ---------------- USER LOGIN -----------------
export interface UserLoginStarted {
  type: typeof USER_LOGIN_STARTED;
  payload: ICredentials;
}
export interface UserLoginPending {
  type: typeof USER_LOGIN_PENDING;
}
export interface UserLoginResolved {
  type: typeof USER_LOGIN_RESOLVED;
  payload: UserResponse;
}
export interface UserLoginRejected {
  type: typeof USER_LOGIN_REJECTED;
  payload: string;
}

export type UserActionType =
  | UserRegisterStarted
  | UserRegisterPending
  | UserRegisterResolved
  | UserRegisterRejected
  | UserLoginStarted
  | UserLoginPending
  | UserLoginResolved
  | UserLoginRejected
  | UserRegisterPending;
