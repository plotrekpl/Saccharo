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
