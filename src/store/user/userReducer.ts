import { IAuth, IUser } from '../../constants';
import * as userTypes from './userTypes';

interface State {
  user: IUser | null;
  auth: IAuth | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  user: null,
  loading: false,
  error: null,
  auth: null,
};

export default function userReducer(
  state: State = initialState,
  actions: userTypes.UserActionType,
) {
  switch (actions.type) {
    case userTypes.USER_REGISTER_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userTypes.USER_REGISTER_RESOLVED:
      return {
        ...state,
        auth: actions.payload,
        loading: false,
        error: null,
      };
    case userTypes.USER_REGISTER_REJECTED:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    case userTypes.USER_LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userTypes.USER_LOGIN_RESOLVED:
      return {
        ...state,
        auth: actions.payload,
        loading: false,
        error: null,
      };
    case userTypes.USER_LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    case userTypes.GET_USER_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userTypes.GET_USER_RESOLVED:
      return {
        ...state,
        user: actions.payload,
        loading: false,
        error: false,
      };
    case userTypes.GET_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
