import { IDrink } from '../../constants/index';

export const CREATE_DRINK_STARTED = 'CREATE_DRINK_STARTED';
export const CREATE_DRINK_PENDING = 'CREATE_DRINK_PENDING';
export const CREATE_DRINK_RESOLVED = 'CREATE_DRINK_RESOLVED';
export const CREATE_DRINK_REJECTED = 'CREATE_DRINK_REJECTED';
export const GET_DRINKS_STARTED = 'GET_DRINKS_STARTED';
export const GET_DRINKS_PENDING = 'GET_DRINKS_PENDING';
export const GET_DRINKS_RESOLVED = 'GET_DRINKS_RESOLVED';
export const GET_DRINKS_REJECTED = 'GET_DRINKS_REJECTED';

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

export interface GetDrinksStarted {
  type: typeof GET_DRINKS_STARTED;
}
export interface GetDrinksPending {
  type: typeof GET_DRINKS_PENDING;
}
export interface GetDrinksResolved {
  type: typeof GET_DRINKS_RESOLVED;
  payload: IDrink[];
}
export interface GetDrinksRejected {
  type: typeof GET_DRINKS_REJECTED;
  payload: string;
}

export type DrinkActionType =
  | CreateDrinkStarted
  | CreateDrinkPending
  | CreateDrinkResolved
  | CreateDrinkRejected
  | GetDrinksStarted
  | GetDrinksPending
  | GetDrinksResolved
  | GetDrinksRejected;
