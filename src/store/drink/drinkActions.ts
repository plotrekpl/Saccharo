import { IDrink } from 'src/constants';

import * as drinkTypes from './drinkTypes';

export const createDrinkStarted = (drink: IDrink): drinkTypes.CreateDrinkStarted => ({
  type: drinkTypes.CREATE_DRINK_STARTED,
  payload: drink,
});

export const createDrinkPending = (): drinkTypes.CreateDrinkPending => ({
  type: drinkTypes.CREATE_DRINK_PENDING,
});

export const createDrinkResolved = (message: string): drinkTypes.CreateDrinkResolved => ({
  type: drinkTypes.CREATE_DRINK_RESOLVED,
  payload: message,
});

export const createDrinkRejected = (errorMessage: string): drinkTypes.CreateDrinkRejected => ({
  type: drinkTypes.CREATE_DRINK_REJECTED,
  payload: errorMessage,
});

export const getDrinksStarted = (): drinkTypes.GetDrinksStarted => ({
  type: drinkTypes.GET_DRINKS_STARTED,
});
export const getDrinksPending = (): drinkTypes.GetDrinksPending => ({
  type: drinkTypes.GET_DRINKS_PENDING,
});
export const getDrinksResolved = (drinks: IDrink[]): drinkTypes.GetDrinksResolved => ({
  type: drinkTypes.GET_DRINKS_RESOLVED,
  payload: drinks,
});
export const getDrinksRejected = (errorMessage: string): drinkTypes.GetDrinksRejected => ({
  type: drinkTypes.GET_DRINKS_REJECTED,
  payload: errorMessage,
});
