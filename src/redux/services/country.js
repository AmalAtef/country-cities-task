import { callAxios } from "./callAxios";

import { getCookie } from "../../util/session";
const country = {};

country.getAllCountries = function() {
  console.log("service getAll Countries")
  return new Promise(async (resolve, reject) => {
    
      try {
      const tokenValue = getCookie("access_token", false);
      const options = {
        url: `/country`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + tokenValue
        }
      };
        let resX = await callAxios(options);

        let res = resX.data;

        console.log("res getAllCountries from service ",res)
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


country.getCountryById = function(id) {
  console.log("service getCountryById ",id)
  return new Promise(async (resolve, reject) => {
    
      try {
      const tokenValue = getCookie("access_token", false);
      const options = {
        url: `/country/${id}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + tokenValue
        }
      };
        let resX = await callAxios(options);

        let res = resX.data;

        console.log("res getCountryById from service ",res)
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

country.addCountry = function(Name) {
  console.log("service addCountry ",Name)
  return new Promise(async (resolve, reject) => {
    
      try {
      const tokenValue = getCookie("access_token", false);
      const options = {
        url: `/country`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + tokenValue
        },
        data: {
          Name
        }
      };
        let resX = await callAxios(options);

        let res = resX.data;

        console.log("res addCountry from service ",res)
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

country.editCountry = function(Id,Name) {
  console.log("service editCountry ",Id,Name)
  return new Promise(async (resolve, reject) => {
    
      try {
      const tokenValue = getCookie("access_token", false);
      const options = {
        url: `/country`,
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + tokenValue
        },
        data:{Id,Name}
      };
        let resX = await callAxios(options);

        let res = resX.data;

        console.log("res editCountry from service ",res)
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

country.deleteCountry = function(id) {
  console.log("service deleteCountry ",id)
  return new Promise(async (resolve, reject) => {
    
      try {
      const tokenValue = getCookie("access_token", false);
      const options = {
        url: `/country/${id}`,
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + tokenValue
        }
      };
        let resX = await callAxios(options);

        let res = resX.data;

        console.log("res deleteCountry from service ",res)
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


export { country };
