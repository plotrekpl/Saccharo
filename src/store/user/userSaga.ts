import { call, put, takeLatest } from 'redux-saga/effects';

import { UserResponse } from 'src/constants';

import { firebase } from '../../firebase/config';
import * as userActions from './userActions';
import * as userTypes from './userTypes';

const auth = firebase.default.auth();

let response;

async function handleRegister(email: string, password: string) {
  try {
    response = await auth.createUserWithEmailAndPassword(email, password);
    return JSON.parse(JSON.stringify(response.user!));
  } catch (error) {}
}

async function handleLogin(email: string, password: string) {
  try {
    response = await auth.signInWithEmailAndPassword(email, password);
    return JSON.parse(JSON.stringify(response.user!));
  } catch (error) {}
}

function mapResponseToUser(response: any) {
  return {
    refreshToken: response.stsTokenManager.refreshToken,
    accessToken: response.stsTokenManager.accessToken,
    expirationTime: response.stsTokenManager.expirationTime,
    uid: response.uid,
    email: response.email,
  };
}

function writeUserToDatabase(email: string, key: string) {
  firebase.default
    .database()
    .ref('users/' + key)
    .set({
      email,
    });
}

function* userRegisterSaga(action: userTypes.UserRegisterStarted) {
  const { email, password } = action.payload;
  try {
    yield put(userActions.userRegisterPending());
    const response = yield handleRegister(email, password);
    const user: UserResponse = yield call(mapResponseToUser, response);
    yield call(writeUserToDatabase, user.email, user.uid);
    yield put(userActions.userRegisterResolved(user));
  } catch (error) {
    yield put(userActions.userRegisterRejected(error));
  }
}

function* userLoginSaga(action: userTypes.UserLoginStarted) {
  const { email, password } = action.payload;
  try {
    yield put(userActions.userLoginPending());
    const response = yield handleLogin(email, password);
    const user: UserResponse = yield call(mapResponseToUser, response);
    yield put(userActions.userLoginResolved(user));
  } catch (error) {
    yield put(userActions.userLoginRejected(error));
  }
}

function* watchUserRequest() {
  yield takeLatest(userTypes.USER_REGISTER_STARTED, userRegisterSaga);
  yield takeLatest(userTypes.USER_LOGIN_STARTED, userLoginSaga);
}

const userSaga = watchUserRequest;

export default userSaga;
