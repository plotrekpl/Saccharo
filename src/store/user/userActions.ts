import { ICredentials, UserRegisterResponse } from '../../constants';
import * as userTypes from './userTypes';

export const userRegister = (
  credentials: ICredentials,
  isRegister: boolean,
): userTypes.UserRegister => ({
  type: userTypes.USER_REGISTER,
  payload: { credentials, isRegister },
});
export const userRegisterPending = (): userTypes.UserRegisterPending => ({
  type: userTypes.USER_REGISTER_PENDING,
});
export const userRegisterResolved = (
  user: UserRegisterResponse,
): userTypes.UserRegisterResolved => ({
  type: userTypes.USER_REGISTER_RESOLVED,
  payload: user,
});
export const userRegisterRejected = (errorMessage: string): userTypes.UserRegisterRejected => ({
  type: userTypes.USER_REGISTER_REJECTED,
  payload: errorMessage,
});
