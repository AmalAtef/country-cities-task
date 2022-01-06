import { callAxios } from "./callAxios";

import { getCookie } from "../../util/session";
const city = {};

 city.getAllCities = function() {
    return new Promise(async (resolve, reject) => {
      
        try {
        const tokenValue = getCookie("access_token", false);
        const options = {
          url: `/city`,
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: "Bearer " + tokenValue
          }
        };
          let resX = await callAxios(options);
  
          let res = resX.data;
  
          if (res) {
              resolve(res);
            } else {
              resolve({ message: res.message });
            }
          
        } catch (err) {
          resolve({ message: err.message });
        }
      
    }).catch(err => {
      console.log(err);
    });
  };
  
  
city.getCityById = function(id) {
    return new Promise(async (resolve, reject) => {
      
        try {
        const tokenValue = getCookie("access_token", false);
        const options = {
          url: `/city/${id}`,
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: "Bearer " + tokenValue
          }
        };
          let resX = await callAxios(options);
  
          let res = resX.data;
  
          if (res) {
              resolve(res);
            } else {
              resolve({ message: res.message });
            }
          
        } catch (err) {
          resolve({ message: err.message });
        }
      
    }).catch(err => {
      console.log(err);
    });
};
  
city.getCitiesOfCountry = function(id) {
    return new Promise(async (resolve, reject) => {
      
        try {
        const tokenValue = getCookie("access_token", false);
        const options = {
          url: `/city/getcities/${id}`,
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: "Bearer " + tokenValue
          }
        };
          let resX = await callAxios(options);
  
          let res = resX.data;
  
          if (res) {
              resolve(res);
            } else {
              resolve({ message: res.message });
            }
          
        } catch (err) {
          resolve({ message: err.message });
        }
      
    }).catch(err => {
      console.log(err);
    });
};

city.addCity = function(Name,CountryId) {
    return new Promise(async (resolve, reject) => {
      
        try {
        const tokenValue = getCookie("access_token", false);
        const options = {
          url: `/city`,
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: "Bearer " + tokenValue
          },
          data: {
            Name,CountryId
          }
        };
          let resX = await callAxios(options);
  
          let res = resX.data;
  
          if (res) {
              resolve(res);
            } else {
              resolve({ message: res.message });
            }
          
        } catch (err) {
          resolve({ message: err.message });
        }
      
    }).catch(err => {
      console.log(err);
    });
  };
  
city.editCity = function(Id,Name,CountryId) {
    return new Promise(async (resolve, reject) => {
      
        try {
        const tokenValue = getCookie("access_token", false);
        const options = {
          url: `/city`,
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: "Bearer " + tokenValue
          },
          data:{Id,Name,CountryId}
        };
          let resX = await callAxios(options);
  
          let res = resX.data;

          if (res) {
              resolve(res);
            } else {
              resolve({ message: res.message });
            }
          
        } catch (err) {
          resolve({ message: err.message });
        }
      
    }).catch(err => {
      console.log(err);
    });
  };
  
  city.deleteCity = function(id) {
    return new Promise(async (resolve, reject) => {
      
        try {
        const tokenValue = getCookie("access_token", false);
        const options = {
          url: `/city/${id}`,
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: "Bearer " + tokenValue
          }
        };
          let resX = await callAxios(options);
  
          let res = resX.data;

          if (res) {
              resolve(res);
            } else {
              resolve({ message: res.message });
            }
          
        } catch (err) {
          resolve({ message: err.message });
        }
      
    }).catch(err => {
      console.log(err);
    });
  };
  
  

export { city };