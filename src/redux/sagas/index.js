import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import countrySagas from "./Country";
import citySagas from "./City";

export default function* rootSaga(getState) {
  yield all([authSagas(),countrySagas(),citySagas()]);
}
