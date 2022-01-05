import {
    GET_ALL_COUNTRIES_SUCCESS,
    GET_COUNTRY_BY_ID_SUCCESS,
    ADD_COUNTRY_SUCCESS,
    EDIT_COUNTRY_SUCCESS,
    DELETE_COUNTRY_SUCCESS
} from "../ActionTypes";

const initialCountryState = {
    allCountriesData:[],
    countryByIdData:null,
    countryAdded:null,
    countryEdited:null,
    countryDeleted:null


};

const country = (state = initialCountryState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES_SUCCESS: {
        console.log("from reducer all countries ",action.payload)
        return {
          ...state,
          allCountriesData: action.payload
        };
      }
      case GET_COUNTRY_BY_ID_SUCCESS: {
        console.log("from reducer country by Id ",action.payload)
        return {
          ...state,
          countryByIdData: action.payload
        };
      }
      case ADD_COUNTRY_SUCCESS: {
        console.log("from reducer add country ",action.payload)
        return {
          ...state,
          countryAdded: action.payload
        };
      }
      case EDIT_COUNTRY_SUCCESS: {
        console.log("from reducer edit country",action.payload)
        return {
          ...state,
          countryEdited: action.payload
        };
      }
      case DELETE_COUNTRY_SUCCESS: {
        console.log("from reducer delete country",action.payload)
        return {
          ...state,
          countryDeleted: action.payload
        };
      }
    default:
      return state;
  }
};

export default country;