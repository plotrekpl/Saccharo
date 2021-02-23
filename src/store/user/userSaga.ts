import { call, put, select, takeLatest } from 'redux-saga/effects';

import { IDrink, IUser, IUserResponse } from 'src/constants';
import { alertMessage, alertTypes } from 'src/constants/enums/alert';
import { asyncStorageKeys } from 'src/constants/enums/asyncStorageKeys';
import alertHandler from 'src/utils/helpers/alertHandler';

import { firebase } from '../../firebase/config';
import {
  removeFromAsyncStorage,
  saveToAsyncStorage,
} from '../../utils/helpers/asyncStorageHelpers';
import * as userActions from './userActions';
import * as userTypes from './userTypes';

const auth = firebase.default.auth();
let response;
const now = new Date();
const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

async function handleRegister(email: string, password: string) {
  try {
    response = await auth.createUserWithEmailAndPassword(email, password);
    return JSON.parse(JSON.stringify(response.user!));
  } catch (error) {
    return error;
  }
}

async function handleLogin(email: string, password: string) {
  try {
    response = await auth.signInWithEmailAndPassword(email, password);
    return JSON.parse(JSON.stringify(response.user!));
  } catch (error) {
    return error;
  }
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

async function fetchUserData(uid: string) {
  const userRef = firebase.default.database().ref(`users/${uid}`);
  const snapshot = await userRef.once('value');
  let todaysDrinks: IDrink[] = [];
  const user = snapshot.val();

  if (user.drinks) {
    const userDrinks: IDrink[] = user.drinks;
    for (const [key, value] of Object.entries(userDrinks)) {
      todaysDrinks = key === date ? (todaysDrinks = Object.values(value)) : [];
    }
  } else {
    todaysDrinks = [];
  }

  const data = {
    ...user,
    drinks: todaysDrinks,
  };

  return data;
}

function updateUserInDatabase(user: IUser) {
  const userDb = firebase.default.auth().currentUser;
  if (userDb) {
    return firebase.default.database().ref(`users/${userDb.uid}`).update({
      name: user.name,
    });
  } else {
    alertHandler(alertMessage.missingUser, alertTypes.warning);
  }
}

function saveUserDataToASyncStorage(data: any) {
  const dataSaveToAsyncStorage = {
    uid: data.user.uid,
    token: data.auth.accessToken,
    expirationTime: data.auth.expirationTime,
  };
  saveToAsyncStorage(asyncStorageKeys.userData, dataSaveToAsyncStorage);
}

function* userRegisterSaga(action: userTypes.UserRegisterStarted) {
  const { email, password, name } = action.payload;
  try {
    yield put(userActions.userRegisterPending());
    const response = yield handleRegister(email, password);
    if (response.message) {
      yield put({ type: userTypes.USER_REGISTER_REJECTED, payload: response.message });
      alertHandler(response.message, alertTypes.alert);
      return;
    }
    const data = yield call(mapResponseToUser, response, name);
    yield call(writeUserToDatabase, data.user);
    yield call(saveUserDataToASyncStorage, data);
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
    if (response.message) {
      yield put({ type: userTypes.USER_LOGIN_REJECTED, payload: response.message });
      alertHandler(response.message, alertTypes.alert);
      return;
    }
    const data = yield call(mapResponseToUser, response);
    yield call(saveUserDataToASyncStorage, data);
    yield put({ type: userTypes.GET_USER_STARTED, payload: data.user.uid });
    yield put(userActions.userLoginResolved(data.auth));
  } catch (error) {
    yield put(userActions.userLoginRejected(error));
  }
}

function* logoutUserSaga(action: userTypes.UserLogoutStarted) {
  try {
    yield put(userActions.userLogoutPending());
    auth.signOut();
    yield put(userActions.userLogoutResolved('Log out'));
    yield call(removeFromAsyncStorage, asyncStorageKeys.userData);
  } catch (error) {
    yield put(userActions.userLogoutRejected(error));
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

function* updateUser(action: userTypes.UpdateUserStarted) {
  const { payload } = action;
  try {
    yield put(userActions.updateUserPending());
    yield call(updateUserInDatabase, payload);
    yield put(userActions.updateUserResolved('Updated'));
    yield put({ type: userTypes.GET_USER_STARTED, payload: payload.uid });
  } catch (error) {
    yield put(userActions.updateUserRejected(error));
  }
}

function* addDrinkSaga(action: userTypes.AddDrinkStarted) {
  const { payload } = action;
  try {
    yield put(userActions.addDrinkPending());
    const drink: IDrink = payload;
    const user: IUser = yield select((state) => state.userReducer.user);

    firebase.default
      .database()
      .ref('users/' + user.uid + '/drinks/' + date + `/${drink.barCode}`)
      .set(drink);
    yield put({ type: userTypes.GET_USER_STARTED, payload: user.uid });
    yield put(userActions.addDrinkResolved('Added'));
  } catch (error) {
    yield put(userActions.addDrinkRejected(error));
  }
}

function* watchUserRequest() {
  yield takeLatest(userTypes.USER_REGISTER_STARTED, userRegisterSaga);
  yield takeLatest(userTypes.USER_LOGIN_STARTED, userLoginSaga);
  yield takeLatest(userTypes.USER_LOGOUT_STARTED, logoutUserSaga);
  yield takeLatest(userTypes.GET_USER_STARTED, getUserData);
  yield takeLatest(userTypes.UPDATE_USER_STARTED, updateUser);
  yield takeLatest(userTypes.ADD_DRINK_STARTED, addDrinkSaga);
}

const userSaga = watchUserRequest;

export default userSaga;
