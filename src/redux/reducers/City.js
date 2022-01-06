import {
  GET_ALL_CITIES_SUCCESS,
  GET_CITY_BY_ID_SUCCESS,
  GET_CITIES_OF_COUNTRY_SUCCESS,
  ADD_CITY_SUCCESS,
  EDIT_CITY_SUCCESS,
  DELETE_CITY_SUCCESS
} from "../ActionTypes";

const initialCityState = {
  allCitiesData:[],
  citiesOfCountryData:[],
  cityByIdData:null,
  cityAdded:null,
  cityEdited:null,
  cityDeleted:null
};

const city = (state = initialCityState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES_SUCCESS: {
      console.log("from reducer all cities ",action.payload)
      return {
        ...state,
        allCitiesData: action.payload
      };
    }
    case GET_CITIES_OF_COUNTRY_SUCCESS: {
      console.log("from reducer all cities of country ",action.payload)
      return {
        ...state,
        citiesOfCountryData: action.payload
      };
    }
    case GET_CITY_BY_ID_SUCCESS: {
      console.log("from reducer city by Id ",action.payload)
      return {
        ...state,
        cityByIdData: action.payload
      };
    }
    case ADD_CITY_SUCCESS: {
      console.log("from reducer add city ",action.payload)
      return {
        ...state,
        cityAdded: action.payload
      };
    }
    case EDIT_CITY_SUCCESS: {
      console.log("from reducer edit city",action.payload)
      return {
        ...state,
        cityEdited: action.payload
      };
    }
    case DELETE_CITY_SUCCESS: {
      console.log("from reducer delete city",action.payload)
      return {
        ...state,
        cityDeleted: action.payload
      };
    }
    default:
      return state;
  }
};

export default city;
