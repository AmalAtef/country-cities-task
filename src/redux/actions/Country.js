import {
    GET_ALL_COUNTRIES,
    GET_ALL_COUNTRIES_SUCCESS,
    GET_COUNTRY_BY_ID,
    GET_COUNTRY_BY_ID_SUCCESS,
    ADD_COUNTRY,
    ADD_COUNTRY_SUCCESS,
    DELETE_COUNTRY,
    DELETE_COUNTRY_SUCCESS,
    EDIT_COUNTRY,
    EDIT_COUNTRY_SUCCESS,
    OPEN_ADD_EDIT_MODAL
} from "../ActionTypes";


///GET ALL
export const getAllCountries = () => {
    console.log("get all countries action ")
    return {
      type: GET_ALL_COUNTRIES
    };
  };
  
  export const getAllCountriesSuccess = (returnedData) => {
    console.log("getAllCountries from action success ",returnedData)
    return {
      type: GET_ALL_COUNTRIES_SUCCESS,
      payload: returnedData 
    };
  };

////GET BY ID
  export const getCountryById = (countryId) => {
    console.log("getCountryById action ",countryId)
    return {
      type: GET_COUNTRY_BY_ID,
      payload: countryId 
    };
  };
  
  export const getCountryByIdSuccess = (returnedData) => {
    console.log("getCountryById from action success ",returnedData)
    return {
      type: GET_COUNTRY_BY_ID_SUCCESS,
      payload: returnedData 
    };
  };

  //// ADD 
  export const addCountry = (countryName) => {
    console.log("addCountry action ",countryName)
    return {
      type: ADD_COUNTRY,
      payload: countryName 
    };
  };
  
  export const addCountrySuccess = (returnedData) => {
    console.log("addCountry from action success ",returnedData)
    return {
      type: ADD_COUNTRY_SUCCESS,
      payload: returnedData 
    };
  };

  /// EDIT
  export const editCountry = (countryId,countryNewName) => {
    console.log("editCountry action ",countryId,countryNewName)
    return {
      type: EDIT_COUNTRY,
      payload: {countryId,countryNewName}
    };
  };
  
  export const editCountrySuccess = (returnedData) => {
    console.log("editCountry from action success ",returnedData)
    return {
      type: EDIT_COUNTRY_SUCCESS,
      payload: returnedData 
    };
  };

  //DELETE
  export const deleteCountry = (countryId) => {
    console.log("deleteCountry action ",countryId)
    return {
      type: DELETE_COUNTRY,
      payload: countryId 
    };
  };
  
  export const deleteCountrySuccess = (returnedData) => {
    console.log("deleteCountry from action success ",returnedData)
    return {
      type: DELETE_COUNTRY_SUCCESS,
      payload: returnedData 
    };
  };

  export const openAddEdit=(flag)=>{
return{
    type:OPEN_ADD_EDIT_MODAL,
    payload:flag
}
  }