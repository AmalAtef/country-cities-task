import { callAxios } from "./callAxios";

import { getCookie } from "../../util/session";
const country = {};

country.getAllCountries = function() {
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
