import axios from "axios";
import { setCookie, removeCookie, getCookie } from "../../util/session";
let axiosRequest = axios.create({
  baseURL: "https://taskfrontendapi.azurewebsites.net/api/",
  responseType: "json"
});

let callAxios = options => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axiosRequest(options);
      if (!response.data) {
        resolve({ data: { message: response.message } });
      } else {
        // console.log("response.data ",response.data)
        if (response.data.token) {
          setCookie("access_token", response.data.token);

          options.headers.Authorization = "Bearer " + response.data.token;
          response = await axiosRequest(options);
          resolve(response);

        } else if (response.data.message) {
          if (response.data.message == "unauthorized") {
            console.log("**********Authorization*********");
            removeCookie("access_token");
            resolve({
              data: { code: "unauthorized", message: "unauthorized" }
            });
          } else {
            resolve(response);
          }
        } else {
          resolve(response);
        }
        resolve(response);
      }
    } catch (error) {
      resolve({ data: { message: error.message } });
    }
  }).catch(err => {
    console.log(err);
  });
};

export { callAxios };
