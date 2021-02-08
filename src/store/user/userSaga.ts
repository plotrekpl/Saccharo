import { call, put, takeLatest } from 'redux-saga/effects';

import { IUserResponse } from 'src/constants';

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

function writeUserToDatabase(userName: string, key: string) {
  firebase.default
    .database()
    .ref('users/' + key)
    .set({
      userName,
    });
}

function fetchUserData(uid: string) {
  const users = firebase.default.database().ref(`users/${uid}`);
  users.on('value', function (snapshot) {
    return snapshot.val().userName;
  }),
    (error: any) => {
      console.log(error);
    };
}

function* userRegisterSaga(action: userTypes.UserRegisterStarted) {
  const { email, password, userName } = action.payload;
  try {
    yield put(userActions.userRegisterPending());
    const response = yield handleRegister(email, password);
    const user: IUserResponse = yield call(mapResponseToUser, response);
    yield call(writeUserToDatabase, userName!, user.uid);
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
    const user: IUserResponse = yield call(mapResponseToUser, response);
    yield put(userActions.userLoginResolved(user));
  } catch (error) {
    yield put(userActions.userLoginRejected(error));
  }
}

function* getUserData(action: userTypes.GetUserStarted) {
  const uid = action.payload;
  try {
    yield put(userActions.getUserPending());
    const userData = yield call(fetchUserData, uid);
    yield put(userActions.getUserResolved(userData));
  } catch (error) {
    yield put(userActions.getUserRejected(error));
  }
}

function* watchUserRequest() {
  yield takeLatest(userTypes.USER_REGISTER_STARTED, userRegisterSaga);
  yield takeLatest(userTypes.USER_LOGIN_STARTED, userLoginSaga);
  yield takeLatest(userTypes.GET_USER_STARTED, getUserData);
}

const userSaga = watchUserRequest;

export default userSaga;
