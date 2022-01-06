import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { city } from "../services/city";
import {
  GET_ALL_CITIES,
  GET_CITY_BY_ID,
  GET_CITIES_OF_COUNTRY,
  ADD_CITY,
  EDIT_CITY,
  DELETE_CITY
} from "../ActionTypes";
import {
  showAuthMessage
} from "../actions/Auth";

import {
  getAllCitiesSuccess,
  getCityByIdSuccess,
  getCitiesOfCountrySuccess,
  addCitySuccess,
  editCitySuccess,
  deleteCitySuccess
} from "../actions/City";


/////
const getAllCitiesRequest = async () =>
  await city
    .getAllCities()
    .then(returnedData => returnedData)
    .catch(error => error);

const getCityByIdRequest = async (id) =>
    await city
      .getCityById(id)
      .then(returnedData => returnedData)
      .catch(error => error); 
      
const getCitiesOfCountryRequest = async (id) =>
      await city
        .getCitiesOfCountry(id)
        .then(returnedData => returnedData)
        .catch(error => error); 
        
const addCityRequest = async (cityName,countryId) =>
      await city
        .addCity(cityName,countryId)
        .then(returnedData => returnedData)
        .catch(error => error);  
        
        
const editCityRequest = async (cityId,cityNewName,countryId) =>
        await city
          .editCity(cityId,cityNewName,countryId)
          .then(returnedData => returnedData)
          .catch(error => error);        

const deleteCityRequest = async (cityId) =>
        await city
          .deleteCity(cityId)
          .then(returnedData => returnedData)
          .catch(error => error);      


///////////////
function* requestGetAllCities() {

  try {
    const returnedData = yield call(getAllCitiesRequest);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(getAllCitiesSuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* requestGetCityById({ payload }) {
  try {
    const returnedData = yield call(getCityByIdRequest,payload);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(getCityByIdSuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* requestGetCitiesofCountry({ payload }) {
  try {
    const returnedData = yield call(getCitiesOfCountryRequest,payload);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(getCitiesOfCountrySuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}


function* requestAddCity({ payload }) {
  const {cityName,countryId}=payload
  try {
    const returnedData = yield call(addCityRequest,cityName,countryId);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(addCitySuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* requestEditCity({ payload }) {
  const {cityId,cityNewName,countryId}=payload
  try {
    const returnedData = yield call(editCityRequest,cityId,cityNewName,countryId);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(editCitySuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* requestDeleteCity({ payload }) {
  try {
    const returnedData = yield call(deleteCityRequest,payload);
    if (returnedData.message) {
      yield put(showAuthMessage(returnedData.message));
    } else {
      yield put(deleteCitySuccess(returnedData));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

/////////
export function* allCitiesRequest() {
  yield takeEvery(GET_ALL_CITIES, requestGetAllCities);
}

export function* cityByIdRequest() {
  yield takeEvery(GET_CITY_BY_ID, requestGetCityById);
}

export function* citiesOfCountryRequest() {
  yield takeEvery(GET_CITIES_OF_COUNTRY, requestGetCitiesofCountry);
}

export function* cityAddRequest() {
  yield takeEvery(ADD_CITY, requestAddCity);
}

export function* cityEditRequest() {
  yield takeEvery(EDIT_CITY, requestEditCity);
}

export function* cityDeleteRequest() {
  yield takeEvery(DELETE_CITY, requestDeleteCity);
}


export default function* rootSaga() {
  yield all([
    fork(allCitiesRequest),
    fork(cityByIdRequest),
    fork(citiesOfCountryRequest),
    fork(cityAddRequest),
    fork(cityEditRequest),
    fork(cityDeleteRequest)
  ]);
}
