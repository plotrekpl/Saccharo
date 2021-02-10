import { call, put, takeLatest } from 'redux-saga/effects';

import { IDrink } from 'src/constants';

import { firebase } from '../../firebase/config';
import * as drinkActions from './drinkActions';
import * as drinkTypes from './drinkTypes';

const auth = firebase.default.auth();

function addDrinkToDatabase(drink: IDrink) {
  firebase.default
    .database()
    .ref('drinks/' + drink.barCode)
    .set(drink);
}

function* createDrink(action: drinkTypes.CreateDrinkStarted) {
  const { payload } = action;
  try {
    yield put(drinkActions.createDrinkPending());
    yield call(addDrinkToDatabase, payload);
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
