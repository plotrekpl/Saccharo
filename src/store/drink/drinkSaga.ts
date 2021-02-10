import { put, takeLatest } from 'redux-saga/effects';

import * as drinkActions from './drinkActions';
import * as drinkTypes from './drinkTypes';

function* createDrink(action: drinkTypes.CreateDrinkStarted) {
  try {
    yield put(drinkActions.createDrinkPending());
    yield put(drinkActions.createDrinkResolved('Added'));
  } catch (error) {
    yield put(drinkActions.createDrinkRejected(error));
  }
}

function* watchDrinkRequest() {
  yield takeLatest(drinkTypes.CREATE_DRINK_STARTED, createDrink);
}

const drinkSaga = watchDrinkRequest;

export default drinkSaga;
