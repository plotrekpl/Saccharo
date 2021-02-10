import { all, fork } from 'redux-saga/effects';

import drinkSaga from './drink/drinkSaga';
import userSaga from './user/userSaga';

export default function* rootSagas() {
  yield all([fork(userSaga), fork(drinkSaga)]);
}
