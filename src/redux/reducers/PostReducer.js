import { types } from "../types/types";

/* POST REDUCER */
const initialPostState = {
  loading: false,
  succes: false,
}
export const postReducer = (state = initialPostState, action) => {
  switch (action.type) {

    case types.START_ADD_TO_LIST:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes
      };

    case types.SUCCES_ADD_TO_LIST:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes
      };

    case types.LOGOUT:
      return {
        loading: false,
        succes: false,
      }
    default:
      return state;
  }
}