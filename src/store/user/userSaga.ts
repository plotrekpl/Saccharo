import { call, fork, put, select, takeLatest } from 'redux-saga/effects';

import { firebase } from '../../firebase/config';
import * as userActions from './userActions';
import * as userTypes from './userTypes';

function* userRegisterSaga(action: userTypes.UserRegister) {
  const { payload } = action;
  try {
    yield put(userActions.userRegisterPending());
    const auth = firebase.default.auth();
    const user = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      payload.email,
      payload.password,
    );
    yield put(userActions.userRegisterResolved(user));
  } catch (error) {
    yield put(userActions.userRegisterRejected(error));
  }
}

function* watchUserRequest() {
  yield takeLatest(userTypes.USER_REGISTER, userRegisterSaga);
}

const userSaga = [fork(watchUserRequest)];

export default userSaga;
