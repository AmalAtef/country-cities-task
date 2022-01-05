import {
  USER_LOGIN_SUCCESS,
  SHOW_MESSAGE,
  HIDE_MESSAGE
} from "../ActionTypes";
const initialAuthState = {
  authUser: null,
  isLogin: false,

  alertMessage: "",
  showMessage: false,
  loader: false
};

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        isLogin: true
      };
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: "",
        showMessage: false,
        loader: false
      };
    }
    default:
      return state;
  }
};

export default auth;
