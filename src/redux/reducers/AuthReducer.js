import { types } from "../types/types";


/* AUTH REDUCER */
const initialState = {
  loading: false,
  auth_user: false,
  login_succes: false,
  user: "",
  password: "",
  user_data: {},
  user_lists: {},
  error: false,
  errorMsg: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ERROR:
      return {
        ...state,
        auth_user: action.payload.auth_user,
        login_succes: action.payload.login_succes,
        error: action.payload.error,
        errorMsg: [...state.errorMsg, action.payload.errorMsg]
      };

    case types.ERROR_OK:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        errorMsg: []
      };
      
    case types.START_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        password: action.payload.password,
        loading: action.payload.loading
      };

    case types.AUTH_USER:
      return {
        ...state,
        auth_user: action.payload.auth_user,
        loading: action.payload.loading
      };

    case types.SUCCES_LOGIN:
      return {
        ...state,
        login_succes: action.payload.login_succes,
        loading: action.payload.loading
      };

    case types.GET_USER_INFO:
      return {
        ...state,
        loading: action.payload.loading,
        user_data: action.payload.userData_response
      };

    case types.GET_USER_LISTS:
      return {
        ...state,
        loading: action.payload.loading,
        user_lists: action.payload.response_user_list
      };

    case types.LOGOUT:
      return {
        loading: false,
        auth_user: false,
        login_succes: false,
        user: "",
        password: "",
        user_data: {},
        user_lists: {},
        error: false,
        errorMsg: []
      };

    default:
      return state;
  }

};
