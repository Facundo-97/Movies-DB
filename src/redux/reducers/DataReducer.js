import { types } from "../types/types";

/* DATA REDUCER */
const initialDataState = {
  loading: false,
  succes: false,
  request: "",
  movie_data: {},
  error: false,
  errorMsg: []
};

export const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {

    case types.START_REQUEST:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes,
        request: action.payload.request,
      };

    case types.SUCCES_REQUEST:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes,
        movie_data: action.payload.response
      };
    case types.FAILED_REQUEST:
      return {
        ...state,
        loading: false,
        succes: false,
        error: action.payload.error,
        errorMsg: [...state.errorMsg, action.payload.errorMsg]
      }
    case types.FAILED_REQUEST_OK:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        errorMsg: []
      }

    case types.LOGOUT:
      return {
        loading: false,
        succes: false,
        request: "",
        movie_data: {},
        error: false,
        errorMsg: []
      }
    default:
      return state;
  }
};
