import {
    GET_ALL_COUNTRIES_SUCCESS,
    GET_COUNTRY_BY_ID_SUCCESS,
    ADD_COUNTRY_SUCCESS,
    EDIT_COUNTRY_SUCCESS,
    DELETE_COUNTRY_SUCCESS,
    OPEN_ADD_EDIT_MODAL
} from "../ActionTypes";

const initialCountryState = {
    allCountriesData:[],
    countryByIdData:null,
    countryAdded:null,
    countryEdited:null,
    countryDeleted:null,

    openAddEdit:false

};

const country = (state = initialCountryState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES_SUCCESS: {
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
        let countryArr=[...state.allCountriesData]
        countryArr.push(action.payload)
        return {
          ...state,
          allCountriesData:[...countryArr],
          countryAdded: action.payload
        };
      }
      case EDIT_COUNTRY_SUCCESS: {
      
        let countryArr=[...state.allCountriesData]
        for (let i = 0; i < countryArr.length; i++) {
            if (countryArr[i].id ===action.payload.id ) {
                countryArr[i].name=action.payload.name
            }
        }
      
        return {
          ...state,
          allCountriesData:[...countryArr],
          countryEdited: action.payload
        };
      }
      case DELETE_COUNTRY_SUCCESS: {
        let countryArr=[...state.allCountriesData]
        for (let i = 0; i < countryArr.length; i++) {
            if (countryArr[i].id ===action.payload.id ) {
                countryArr.splice(i, 1);
            }
        }
       
        return {
          ...state,
          allCountriesData:[...countryArr],
          countryDeleted: action.payload
        };
      }
      case OPEN_ADD_EDIT_MODAL:{
        return {
            ...state,
            openAddEdit: action.payload
          };
      }
    default:
      return state;
  }
};

export default country;