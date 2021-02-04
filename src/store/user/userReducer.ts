import { UserRegisterResponse } from '../../constants';
import * as userTypes from './userTypes';

interface State {
  user: UserRegisterResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  user: null,
  loading: false,
  error: null,
};
/** state in userReducer also should be Typed, assigning initialState does not assure proper Type */
export default function userReducer(state = initialState, actions: userTypes.UserActionType) {
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
        user: actions.payload,
        loading: false,
        error: null,
      };
    case userTypes.USER_REGISTER_REJECTED:
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
