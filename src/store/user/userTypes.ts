import { IAuth, IRegisterCredentials, ILoginCredentials, IUser } from '../../constants';

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
// ---------------- USER LOG OUT -----------------
export const USER_LOGOUT_STARTED = 'USER_LOGOUT_STARTED';
export const USER_LOGOUT_PENDING = 'USER_LOGOUT_PENDING';
export const USER_LOGOUT_RESOLVED = 'USER_LOGOUT_RESOLVED';
export const USER_LOGOUT_REJECTED = 'USER_LOGOUT_REJECTED';
// ---------------- GET USER DATA -----------------
export const GET_USER_STARTED = 'GET_USER_STARTED';
export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_RESOLVED = 'GET_USER_RESOLVED';
export const GET_USER_REJECTED = 'GET_USER_REJECTED';
// ---------------- GET USER DATA -----------------
export const UPDATE_USER_STARTED = 'UPDATE_USER_STARTED';
export const UPDATE_USER_PENDING = 'UPDATE_USER_PENDING';
export const UPDATE_USER_RESOLVED = 'UPDATE_USER_RESOLVED';
export const UPDATE_USER_REJECTED = 'UPDATE_USER_REJECTED';

// -------------- USER REGISTER ----------------
export interface UserRegisterStarted {
  type: typeof USER_REGISTER_STARTED;
  payload: IRegisterCredentials;
}
export interface UserRegisterPending {
  type: typeof USER_REGISTER_PENDING;
}
export interface UserRegisterResolved {
  type: typeof USER_REGISTER_RESOLVED;
  payload: IAuth;
}
export interface UserRegisterRejected {
  type: typeof USER_REGISTER_REJECTED;
  payload: string;
}
// ---------------- USER LOGIN --------------------
export interface UserLoginStarted {
  type: typeof USER_LOGIN_STARTED;
  payload: ILoginCredentials;
}
export interface UserLoginPending {
  type: typeof USER_LOGIN_PENDING;
}
export interface UserLoginResolved {
  type: typeof USER_LOGIN_RESOLVED;
  payload: IAuth;
}
export interface UserLoginRejected {
  type: typeof USER_LOGIN_REJECTED;
  payload: string;
}
// ---------------- USER LOG OUT ------------------
export interface UserLogoutStarted {
  type: typeof USER_LOGOUT_STARTED;
}
export interface UserLogoutPending {
  type: typeof USER_LOGOUT_PENDING;
}
export interface UserLogoutResolved {
  type: typeof USER_LOGOUT_RESOLVED;
  payload: string;
}
export interface UserLogoutRejected {
  type: typeof USER_LOGOUT_REJECTED;
  payload: string;
}
// ---------------- GET USER DATA -----------------
export interface GetUserStarted {
  type: typeof GET_USER_STARTED;
  payload: string;
}
export interface GetUserPending {
  type: typeof GET_USER_PENDING;
}
export interface GetUserResolved {
  type: typeof GET_USER_RESOLVED;
  payload: IUser;
}
export interface GetUserRejected {
  type: typeof GET_USER_REJECTED;
  payload: string;
}
// ---------------- GET USER DATA -----------------
export interface UpdateUserStarted {
  type: typeof UPDATE_USER_STARTED;
  payload: IUser;
}
export interface UpdateUserPending {
  type: typeof UPDATE_USER_PENDING;
}
export interface UpdateUserResolved {
  type: typeof UPDATE_USER_RESOLVED;
  payload: IUser;
}
export interface UpdateUserRejected {
  type: typeof UPDATE_USER_REJECTED;
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
  | UserLogoutStarted
  | UserLogoutPending
  | UserLogoutResolved
  | UserLogoutRejected
  | GetUserStarted
  | GetUserPending
  | GetUserResolved
  | GetUserRejected
  | UpdateUserStarted
  | UpdateUserPending
  | UpdateUserResolved
  | UpdateUserRejected;
