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
      return {
        ...state,
        allCitiesData: action.payload
      };
    }
    case GET_CITIES_OF_COUNTRY_SUCCESS: {
      return {
        ...state,
        citiesOfCountryData: action.payload
      };
    }
    case GET_CITY_BY_ID_SUCCESS: {

      return {
        ...state,
        cityByIdData: action.payload
      };
    }
    case ADD_CITY_SUCCESS: {
      let citiesCountryArr=[...state.citiesOfCountryData]
      citiesCountryArr.push(action.payload)
      let cityArr=[...state.allCitiesData]
      cityArr.push(action.payload)
      return {
        ...state,
        cityAdded: action.payload,
        allCitiesData:cityArr,
        citiesOfCountryData:citiesCountryArr
      };
    }
    case EDIT_CITY_SUCCESS: {

      let cityArr=[...state.allCitiesData]
      for (let i = 0; i < cityArr.length; i++) {
          if (cityArr[i].id ===action.payload.id ) {
              cityArr[i].name=action.payload.name
              break;
          }
      }

      return {
        ...state,
        allCitiesData:cityArr,
        cityEdited: action.payload
      };
    }
    case DELETE_CITY_SUCCESS: {
      let cityArr=[...state.allCitiesData]
        for (let i = 0; i < cityArr.length; i++) {
            if (cityArr[i].id ===action.payload.id ) {
              cityArr.splice(i, 1);
              break;
            }
        }
      return {
        ...state,
        cityDeleted: action.payload,
        allCitiesData:cityArr
      };
    }
    default:
      return state;
  }
};

export default city;
