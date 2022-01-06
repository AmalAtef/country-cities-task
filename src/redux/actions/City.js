import {
    GET_ALL_CITIES,
    GET_ALL_CITIES_SUCCESS,
    GET_CITY_BY_ID,
    GET_CITY_BY_ID_SUCCESS,
    GET_CITIES_OF_COUNTRY,
    GET_CITIES_OF_COUNTRY_SUCCESS,
    ADD_CITY,
    ADD_CITY_SUCCESS,
    EDIT_CITY,
    EDIT_CITY_SUCCESS,
    DELETE_CITY,
    DELETE_CITY_SUCCESS
} from "../ActionTypes";



///GET ALL
export const getAllCities = () => {
    console.log("get all cities action ")
    return {
      type: GET_ALL_CITIES
    };
  };
  
  export const getAllCitiesSuccess = (returnedData) => {
    console.log("getAllCities from action success ",returnedData)
    return {
      type: GET_ALL_CITIES_SUCCESS,
      payload: returnedData 
    };
  };

////GET BY ID
  export const getCityById = (cityId) => {
    console.log("getCityById action ",cityId)
    return {
      type: GET_CITY_BY_ID,
      payload: cityId 
    };
  };
  
  export const getCityByIdSuccess = (returnedData) => {
    console.log("getCityById from action success ",returnedData)
    return {
      type: GET_CITY_BY_ID_SUCCESS,
      payload: returnedData 
    };
  };

  ////GET CITIES OF COUNTRY
  export const getCitiesOfCountry = (countryId) => {
    console.log("getCitiesOfCountry action ",countryId)
    return {
      type: GET_CITIES_OF_COUNTRY,
      payload: countryId 
    };
  };
  
  export const getCitiesOfCountrySuccess = (returnedData) => {
    console.log("getCityById from action success ",returnedData)
    return {
      type: GET_CITIES_OF_COUNTRY_SUCCESS,
      payload: returnedData 
    };
  };

  //// ADD 
  export const addCity = (cityName,countryId) => {
    console.log("addCity action ",cityName,countryId)
    return {
      type: ADD_CITY,
      payload: {cityName,countryId}
    };
  };
  
  export const addCitySuccess = (returnedData) => {
    console.log("addCity from action success ",returnedData)
    return {
      type: ADD_CITY_SUCCESS,
      payload: returnedData 
    };
  };

  /// EDIT
  export const editCity = (cityId,cityNewName,countryId) => {
    console.log("editCity action ",cityId,cityNewName,countryId)
    return {
      type: EDIT_CITY,
      payload: {cityId,cityNewName,countryId}
    };
  };
  
  export const editCitySuccess = (returnedData) => {
    console.log("editCity from action success ",returnedData)
    return {
      type: EDIT_CITY_SUCCESS,
      payload: returnedData 
    };
  };

  //DELETE
  export const deleteCity = (cityId) => {
    console.log("deleteCity action ",cityId)
    return {
      type: DELETE_CITY,
      payload: cityId 
    };
  };
  
  export const deleteCitySuccess = (returnedData) => {
    console.log("deleteCity from action success ",returnedData)
    return {
      type: DELETE_CITY_SUCCESS,
      payload: returnedData 
    };
  };
