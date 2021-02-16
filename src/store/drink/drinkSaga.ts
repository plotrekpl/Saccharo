import { call, put, takeLatest } from 'redux-saga/effects';

import { IDrink } from 'src/constants';

import { firebase } from '../../firebase/config';
import * as drinkActions from './drinkActions';
import * as drinkTypes from './drinkTypes';

async function fetchDrinks() {
  const drinks = firebase.default.database().ref(`drinks/`);
  const snapshot = await drinks.once('value');
  const data = snapshot.val();
  return Object.values(data);
}

function* createDrinkSaga(action: drinkTypes.CreateDrinkStarted) {
  const { payload } = action;
  try {
    yield put(drinkActions.createDrinkPending());
    firebase.default
      .database()
      .ref('drinks/' + payload.barCode)
      .set(payload);
    yield put(drinkActions.createDrinkResolved('Added'));
  } catch (error) {
    yield put(drinkActions.createDrinkRejected(error));
  }
}

function* getDrinkSaga(action: drinkTypes.GetDrinkStarted) {
  const { payload } = action;
  try {
    yield put(drinkActions.getDrinkPending());
    const refDrink = firebase.default.database().ref(`drinks/${payload}`);
    const snapshot = yield refDrink.once('value');
    const drink: IDrink = snapshot.val();
    yield put(drinkActions.getDrinkResolved(drink));
  } catch (error) {
    yield put(drinkActions.getDrinkRejected(error));
  }
}

function* getDrinksSaga(action: drinkTypes.GetDrinksStarted) {
  try {
    yield put(drinkActions.getDrinksPending());
    const drinks: IDrink[] = yield call(fetchDrinks);
    yield put(drinkActions.getDrinksResolved(drinks));
  } catch (error) {
    yield put(drinkActions.getDrinksRejected(error));
  }
}

function* watchDrinkRequest() {
  yield takeLatest(drinkTypes.CREATE_DRINK_STARTED, createDrinkSaga);
  yield takeLatest(drinkTypes.GET_DRINK_STARTED, getDrinkSaga);
  yield takeLatest(drinkTypes.GET_DRINKS_STARTED, getDrinksSaga);
}

const drinkSaga = watchDrinkRequest;

export default drinkSaga;
