import { UserRegisterRequest, UserRegisterResponse } from '../../constants';
import * as userTypes from './userTypes';

export const userRegister = (user: UserRegisterRequest): userTypes.UserRegister => ({
  type: userTypes.USER_REGISTER,
  payload: user,
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
