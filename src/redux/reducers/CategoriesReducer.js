import { types } from "../types/types";

/* CATEGORIES REDUCER */
const initialCategoriesState = {
  loading: false,
  succes: false,
  moviesForGenre: []
};

export const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case types.GET_MOVIES_CATEGORIES:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes
      };

    case types.GET_MOVIES_CATEGORIES_SUCCES:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes
      };

    case types.START_GET_MOVIES_FOR_CAT:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes
      };

    case types.GET_MOVIES_FOR_CAT:
      return {
        ...state,
        loading: action.payload.loading,
        succes: action.payload.succes,
        moviesForGenre: [...state.moviesForGenre, action.payload.moviesForGenre]
      };

    case types.LOGOUT:
      return {
        loading: false,
        succes: false,
        genres: {},
        moviesForGenre: []
      }
    default:
      return state;
  }
};
