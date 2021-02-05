import { UserRegisterRequest, UserRegisterResponse } from '../../constants';

// -------------- USER REGISTER ----------------
export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_PENDING = 'USER_REGISTER_PENDING';
export const USER_REGISTER_RESOLVED = 'USER_REGISTER_RESOLVED';
export const USER_REGISTER_REJECTED = 'USER_REGISTER_REJECTED';

export interface UserRegister {
  type: typeof USER_REGISTER;
  payload: UserRegisterRequest;
}

export interface UserRegisterPending {
  type: typeof USER_REGISTER_PENDING;
}

export interface UserRegisterResolved {
  type: typeof USER_REGISTER_RESOLVED;
  payload: UserRegisterResponse;
}

export interface UserRegisterRejected {
  type: typeof USER_REGISTER_REJECTED;
  payload: string;
}

export type UserActionType =
  | UserRegister
  | UserRegisterPending
  | UserRegisterResolved
  | UserRegisterRejected;
