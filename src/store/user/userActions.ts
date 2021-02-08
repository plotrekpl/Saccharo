import { ICredentials, IUserData, IUserResponse } from '../../constants';
import * as userTypes from './userTypes';

export const userRegister = (credentials: ICredentials): userTypes.UserRegisterStarted => ({
  type: userTypes.USER_REGISTER_STARTED,
  payload: credentials,
});
export const userRegisterPending = (): userTypes.UserRegisterPending => ({
  type: userTypes.USER_REGISTER_PENDING,
});
export const userRegisterResolved = (user: IUserResponse): userTypes.UserRegisterResolved => ({
  type: userTypes.USER_REGISTER_RESOLVED,
  payload: user,
});
export const userRegisterRejected = (errorMessage: string): userTypes.UserRegisterRejected => ({
  type: userTypes.USER_REGISTER_REJECTED,
  payload: errorMessage,
});

export const userLoginStarted = (credentials: ICredentials): userTypes.UserLoginStarted => ({
  type: userTypes.USER_LOGIN_STARTED,
  payload: credentials,
});
export const userLoginPending = (): userTypes.UserLoginPending => ({
  type: userTypes.USER_LOGIN_PENDING,
});
export const userLoginResolved = (user: IUserResponse): userTypes.UserLoginResolved => ({
  type: userTypes.USER_LOGIN_RESOLVED,
  payload: user,
});
export const userLoginRejected = (errorMessage: string): userTypes.UserLoginRejected => ({
  type: userTypes.USER_LOGIN_REJECTED,
  payload: errorMessage,
});

export const getUserStarted = (uid: string): userTypes.GetUserStarted => ({
  type: userTypes.GET_USER_STARTED,
  payload: uid,
});

export const getUserPending = (): userTypes.GetUserPending => ({
  type: userTypes.GET_USER_PENDING,
});

export const getUserResolved = (user: IUserData): userTypes.GetUserResolved => ({
  type: userTypes.GET_USER_RESOLVED,
  payload: user,
});

export const getUserRejected = (errorMessage: string): userTypes.GetUserRejected => ({
  type: userTypes.GET_USER_REJECTED,
  payload: errorMessage,
});
