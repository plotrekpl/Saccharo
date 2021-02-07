import { ICredentials, UserResponse } from '../../constants';
import * as userTypes from './userTypes';

export const userRegister = (credentials: ICredentials): userTypes.UserRegisterStarted => ({
  type: userTypes.USER_REGISTER_STARTED,
  payload: credentials,
});
export const userRegisterPending = (): userTypes.UserRegisterPending => ({
  type: userTypes.USER_REGISTER_PENDING,
});
export const userRegisterResolved = (user: UserResponse): userTypes.UserRegisterResolved => ({
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
export const userLoginResolved = (user: UserResponse): userTypes.UserLoginResolved => ({
  type: userTypes.USER_LOGIN_RESOLVED,
  payload: user,
});
export const userLoginRejected = (errorMessage: string): userTypes.UserLoginRejected => ({
  type: userTypes.USER_LOGIN_REJECTED,
  payload: errorMessage,
});
