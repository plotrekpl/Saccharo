import { IDrink } from 'src/constants';

import * as drinkTypes from './drinkTypes';

interface State {
  message: string;
  loading: boolean;
  error: string | null;
  drink: IDrink | null;
}

const initialState: State = {
  message: '',
  loading: false,
  error: null,
  drink: null,
};

export default function drinkReducer(
  state: State = initialState,
  actions: drinkTypes.DrinkActionType,
) {
  switch (actions.type) {
    case drinkTypes.CREATE_DRINK_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case drinkTypes.CREATE_DRINK_RESOLVED:
      return {
        ...state,
        message: actions.payload,
        loading: false,
        error: null,
      };
    case drinkTypes.CREATE_DRINK_REJECTED:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    case drinkTypes.GET_DRINK_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case drinkTypes.GET_DRINK_RESOLVED:
      return {
        ...state,
        drink: actions.payload,
        loading: false,
        error: null,
      };
    case drinkTypes.GET_DRINK_REJECTED:
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
