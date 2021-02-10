import { call, put, takeLatest } from 'redux-saga/effects';

import { IDrink } from 'src/constants';

import { firebase } from '../../firebase/config';
import * as drinkActions from './drinkActions';
import * as drinkTypes from './drinkTypes';

const auth = firebase.default.auth();

/** I am not convinced that separate function is needed, I assume that it will be needed just by createDrink, you can move code there as, at the end of the day, it will give us less code */
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
