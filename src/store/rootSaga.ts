import { all } from 'redux-saga/effects';

import userSaga from './user/userSaga';

export default function* rootSagas() {
  /** @TODO: Please check documentation about using rootSaga, I am pretty sure that'...userSaga' will cause problems */
  yield all([...userSaga]);
}
