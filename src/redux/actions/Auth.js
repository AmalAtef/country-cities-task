import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  USER_LOGOUT
} from "../ActionTypes";

export const login = (email, password) => {
  console.log("login from action ",email, password)
  return {
    type: USER_LOGIN,
    payload: {
      email,
      password
    }
  };
};

export const loginSuccess = (returnedData) => {
  console.log("login from action success ",returnedData)
  return {
    type: USER_LOGIN_SUCCESS,
    payload: returnedData 
  };
};

export const logout = () => {
  return {
    type:USER_LOGOUT
  };
};



export const showAuthMessage = message => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE
  };
};
