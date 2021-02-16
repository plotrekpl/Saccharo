import { ILoginCredentials, IRegisterCredentials, IAuth, IUser } from '../../constants';
import * as userTypes from './userTypes';

export const userRegister = (credentials: IRegisterCredentials): userTypes.UserRegisterStarted => ({
  type: userTypes.USER_REGISTER_STARTED,
  payload: credentials,
});
export const userRegisterPending = (): userTypes.UserRegisterPending => ({
  type: userTypes.USER_REGISTER_PENDING,
});
export const userRegisterResolved = (user: IAuth): userTypes.UserRegisterResolved => ({
  type: userTypes.USER_REGISTER_RESOLVED,
  payload: user,
});
export const userRegisterRejected = (errorMessage: string): userTypes.UserRegisterRejected => ({
  type: userTypes.USER_REGISTER_REJECTED,
  payload: errorMessage,
});

export const userLoginStarted = (credentials: ILoginCredentials): userTypes.UserLoginStarted => ({
  type: userTypes.USER_LOGIN_STARTED,
  payload: credentials,
});
export const userLoginPending = (): userTypes.UserLoginPending => ({
  type: userTypes.USER_LOGIN_PENDING,
});
export const userLoginResolved = (user: IAuth): userTypes.UserLoginResolved => ({
  type: userTypes.USER_LOGIN_RESOLVED,
  payload: user,
});
export const userLoginRejected = (errorMessage: string): userTypes.UserLoginRejected => ({
  type: userTypes.USER_LOGIN_REJECTED,
  payload: errorMessage,
});

export const userLogoutStarted = (): userTypes.UserLogoutStarted => ({
  type: userTypes.USER_LOGOUT_STARTED,
});

export const userLogoutPending = (): userTypes.UserLogoutPending => ({
  type: userTypes.USER_LOGOUT_PENDING,
});

export const userLogoutResolved = (message: string): userTypes.UserLogoutResolved => ({
  type: userTypes.USER_LOGOUT_RESOLVED,
  payload: message,
});

export const userLogoutRejected = (errorMessage: string): userTypes.UserLogoutRejected => ({
  type: userTypes.USER_LOGOUT_REJECTED,
  payload: errorMessage,
});

export const getUserStarted = (uid: string): userTypes.GetUserStarted => ({
  type: userTypes.GET_USER_STARTED,
  payload: uid,
});

export const getUserPending = (): userTypes.GetUserPending => ({
  type: userTypes.GET_USER_PENDING,
});

export const getUserResolved = (user: IUser): userTypes.GetUserResolved => ({
  type: userTypes.GET_USER_RESOLVED,
  payload: user,
});

export const getUserRejected = (errorMessage: string): userTypes.GetUserRejected => ({
  type: userTypes.GET_USER_REJECTED,
  payload: errorMessage,
});

export const updateUserStarted = (user: IUser): userTypes.UpdateUserStarted => ({
  type: userTypes.UPDATE_USER_STARTED,
  payload: user,
});
export const updateUserPending = (): userTypes.UpdateUserPending => ({
  type: userTypes.UPDATE_USER_PENDING,
});
export const updateUserResolved = (message: string): userTypes.UpdateUserResolved => ({
  type: userTypes.UPDATE_USER_RESOLVED,
  payload: message,
});
export const updateUserRejected = (errorMessage: string): userTypes.UpdateUserRejected => ({
  type: userTypes.UPDATE_USER_REJECTED,
  payload: errorMessage,
});
