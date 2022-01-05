import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { country } from "../services/country";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  ADD_COUNTRY,
  EDIT_COUNTRY,
  DELETE_COUNTRY
} from "../ActionTypes";
import {
  showAuthMessage
} from "../actions/Auth";

import {
  getAllCountriesSuccess,
  getCountryByIdSuccess,
  addCountrySuccess,
  editCountrySuccess,
  deleteCountrySuccess
} from "../actions/Country";


////////
const getAllCountriesRequest = async () =>
  await country
    .getAllCountries()
    .then(returnedData => returnedData)
    .catch(error => error);


const getCountryByIdRequest = async (countryId) =>
    await country
      .getCountryById(countryId)
      .then(returnedData => returnedData)
      .catch(error => error);  
      
      
const addCountryRequest = async (countryName) =>
      await country
        .addCountry(countryName)
        .then(returnedData => returnedData)
        .catch(error => error);  
        
        
const editCountryRequest = async (countryId,countryNewName) =>
        await country
          .editCountry(countryId,countryNewName)
          .then(returnedData => returnedData)
          .catch(error => error);        

const deleteCountryRequest = async (countryId) =>
        await country
          .deleteCountry(countryId)
          .then(returnedData => returnedData)
          .catch(error => error);

///////////////
function* requestGetAllCountries() {
  console.log("requestGetAllCountries from saga ")

  try {
    const returnedData = yield call(getAllCountriesRequest);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(getAllCountriesSuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* requestGetCountryById({ payload }) {
  console.log("requestGetCountryById from saga ",payload)
  try {
    const returnedData = yield call(getCountryByIdRequest,payload);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(getCountryByIdSuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* requestAddCountry({ payload }) {
  console.log("requestAddCountry from saga ",payload)
  try {
    const returnedData = yield call(addCountryRequest,payload);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(addCountrySuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* requestEditCountry({ payload }) {
  console.log("requestEditCountry from saga ",payload)
  const {countryId,countryNewName}=payload
  try {
    const returnedData = yield call(editCountryRequest,countryId,countryNewName);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(editCountrySuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* requestDeleteCountry({ payload }) {
  console.log("requestDeleteCountry from saga ",payload)
  try {
    const returnedData = yield call(deleteCountryRequest,payload);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(deleteCountrySuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

/////
export function* allCountriesRequest() {
  yield takeEvery(GET_ALL_COUNTRIES, requestGetAllCountries);
}

export function* countryByIdRequest() {
  yield takeEvery(GET_COUNTRY_BY_ID, requestGetCountryById);
}

export function* countryAddRequest() {
  yield takeEvery(ADD_COUNTRY, requestAddCountry);
}

export function* countryEditRequest() {
  yield takeEvery(EDIT_COUNTRY, requestEditCountry);
}

export function* countryDeleteRequest() {
  yield takeEvery(DELETE_COUNTRY, requestDeleteCountry);
}

export default function* rootSaga() {
  yield all([
    fork(allCountriesRequest),
    fork(countryByIdRequest),
    fork(countryAddRequest),
    fork(countryEditRequest),
    fork(countryDeleteRequest)

  ]);
}
