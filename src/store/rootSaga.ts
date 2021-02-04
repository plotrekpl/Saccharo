import { all, fork } from 'redux-saga/effects';

import userSaga from './user/userSaga';

export default function* rootSagas() {
  yield all([fork(userSaga)]);
}
