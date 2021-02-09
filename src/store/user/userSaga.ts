import { call, put, takeLatest } from 'redux-saga/effects';

import { IUser, IUserResponse } from 'src/constants';

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

function mapResponseToUser(response: any, name?: string): IUserResponse {
  return {
    auth: {
      refreshToken: response.stsTokenManager.refreshToken,
      accessToken: response.stsTokenManager.accessToken,
      expirationTime: response.stsTokenManager.expirationTime,
    },
    user: {
      uid: response.uid,
      email: response.email,
      name: name ? name : response.displayName,
      avatar: response.photoURL,
    },
  };
}

function writeUserToDatabase(user: IUser) {
  firebase.default
    .database()
    .ref('users/' + user.uid)
    .set(user);
}

function fetchUserData(uid: string) {
  const users = firebase.default.database().ref(`users/${uid}`);
  let user;
  users.on('value', function (snapshot) {
    user = snapshot.val();
    return;
  }),
    (error: any) => {
      console.log(error);
    };
  return user;
}

function* userRegisterSaga(action: userTypes.UserRegisterStarted) {
  const { email, password, name } = action.payload;
  try {
    yield put(userActions.userRegisterPending());
    const response = yield handleRegister(email, password);
    const data = yield call(mapResponseToUser, response, name);
    yield call(writeUserToDatabase, data.user);
    yield put({ type: userTypes.GET_USER_STARTED, payload: data.user.uid });
    yield put(userActions.userRegisterResolved(data.auth));
  } catch (error) {
    yield put(userActions.userRegisterRejected(error));
  }
}

function* userLoginSaga(action: userTypes.UserLoginStarted) {
  const { email, password } = action.payload;
  try {
    yield put(userActions.userLoginPending());
    const response = yield handleLogin(email, password);
    const data = yield call(mapResponseToUser, response);
    yield put({ type: userTypes.GET_USER_STARTED, payload: data.user.uid });
    yield put(userActions.userLoginResolved(data.auth));
  } catch (error) {
    yield put(userActions.userLoginRejected(error));
  }
}

function* getUserData(action: userTypes.GetUserStarted) {
  const uid = action.payload;
  try {
    yield put(userActions.getUserPending());
    const user: IUser = yield call(fetchUserData, uid);
    yield put(userActions.getUserResolved(user));
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
