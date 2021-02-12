import { IDrink } from '../../constants/index';

export const CREATE_DRINK_STARTED = 'CREATE_DRINK_STARTED';
export const CREATE_DRINK_PENDING = 'CREATE_DRINK_PENDING';
export const CREATE_DRINK_RESOLVED = 'CREATE_DRINK_RESOLVED';
export const CREATE_DRINK_REJECTED = 'CREATE_DRINK_REJECTED';

export interface CreateDrinkStarted {
  type: typeof CREATE_DRINK_STARTED;
  payload: IDrink;
}

export interface CreateDrinkPending {
  type: typeof CREATE_DRINK_PENDING;
}

export interface CreateDrinkResolved {
  type: typeof CREATE_DRINK_RESOLVED;
  payload: string;
}

export interface CreateDrinkRejected {
  type: typeof CREATE_DRINK_REJECTED;
  payload: string;
}

export type DrinkActionType =
  | CreateDrinkStarted
  | CreateDrinkPending
  | CreateDrinkResolved
  | CreateDrinkRejected;
