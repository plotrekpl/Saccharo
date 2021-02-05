import { call, put, takeLatest } from 'redux-saga/effects';

import { ICredentials, UserRegisterResponse } from 'src/constants';

import { firebase } from '../../firebase/config';
import * as userActions from './userActions';
import * as userTypes from './userTypes';

async function handleAuth(isLogin: boolean, credential: ICredentials) {
  try {
    const auth = firebase.default.auth();
    let response;
    if (isLogin) {
      response = await auth.createUserWithEmailAndPassword(credential.email, credential.password);
    } else {
      response = await auth.signInWithEmailAndPassword(credential.email, credential.password);
    }
    return JSON.parse(JSON.stringify(response.user!));
  } catch (error) {
    console.log(error);
  }
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

function* userRegisterSaga(action: userTypes.UserRegister) {
  const { isRegister, credentials } = action.payload;
  try {
    yield put(userActions.userRegisterPending());
    const response = isRegister
      ? yield handleAuth(isRegister, credentials)
      : yield handleAuth(isRegister, credentials);
    const user: UserRegisterResponse = yield call(mapResponseToUser, response);
    yield call(writeUserToDatabase, user.email, user.uid);
    yield put(userActions.userRegisterResolved(user));
  } catch (error) {
    yield put(userActions.userRegisterRejected(error));
  }
}

function* watchUserRequest() {
  yield takeLatest(userTypes.USER_REGISTER, userRegisterSaga);
}

const userSaga = watchUserRequest;

export default userSaga;
