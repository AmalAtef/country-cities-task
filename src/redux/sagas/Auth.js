import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { auth } from "../services/auth";
import {USER_LOGIN } from "../ActionTypes";

import {
  loginSuccess,
  showAuthMessage
} from "../actions/Auth";

const loginRequest = async (email, password) =>
  await auth
    .login(email, password)
    .then(user => user)
    .catch(error => error);

///////////////

function* requestLogin({ payload }) {
  const { email, password } = payload;

  console.log("login from saga ",email, password)

  try {
    const returnedData = yield call(loginRequest, email, password);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(loginSuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}


///////

export function* loginUserRequest() {
  yield takeEvery(USER_LOGIN, requestLogin);
}


///////

export default function* rootSaga() {
  yield all([
    fork(loginUserRequest)
  ]);
}
