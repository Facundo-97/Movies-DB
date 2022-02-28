import { types } from "../types/types";

const initialState = {
  loading: false,
  auth_user: false,
  login_succes: false,
  user: "",
  password: "",
  user_data: {}
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
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
        user_data: action.payload.userData_response
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }


};
const initialDataState = {
  loading: false,
  succes: false,
  movie_data: {}
};


export const dataReducer = (state = initialDataState, action ) =>{
  switch (action.type) {
    
    case types.START_REQUEST:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes
      }
    case types.SUCCES_REQUEST:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes,
        movie_data: action.payload.response
      }

      default: 
      return state;
    }
}