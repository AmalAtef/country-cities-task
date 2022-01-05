import { callAxios } from "./callAxios";
import { setCookie, removeCookie, getCookie } from "../../util/session";
import base64url from "base64url";

const auth = {};
const tokenManagerOperations = {};

auth.login = function(Email, Password) {
  return new Promise(async (resolve, reject) => {
    if (Email && Password) {
      try {
        let options = {
          url: "/user/login",
          method: "POST",
          headers: {
            Accept: "application-json",
            "Content-Type": "application/json;charset=UTF-8"
          },
          data: {
            Email,
            Password
          }
        };

        let resX = await callAxios(options);

        let res = resX.data;

        if (res) {
          console.log("res from service ",res)
          if (res.token) {
            let tokenUserData = JSON.parse(
              base64url.decode(`${res.token}`.split(".")[1])
            );

            tokenManagerOperations.setTokenAndValidate(
              "access_token",
              res.token
            );
            resolve({ authUser: tokenUserData.exp });
          } else {
            resolve({ message: res.message });
          }
        }
      } catch (err) {
        resolve({ message: err.message });
      }
    }
  }).catch(err => {
    console.log(err);
  });
};

tokenManagerOperations.clearAllTokens = function(key) {
  removeCookie(key);
  return;
};

tokenManagerOperations.setTokenAndValidate = function(key, value) {
  return new Promise((resolve, reject) => {
    if (!key) {
      resolve(false);
      return;
    }

    setCookie(key, value);
    resolve(true);
  }).catch(err => {
    console.log(err);
  });
};

export { auth, tokenManagerOperations };
