import { types } from "../types/types";
import { KEY } from "../../hooks/APIKEY";

/* REQUEST MOVIE */
const start_request = (request) => {
  return {
    type: types.START_REQUEST,
    payload: {
      succes: false,
      loading: true,
      error: false,
      request: request
    },
  };
};
const response_body = (response) => {
  return {
    type: types.SUCCES_REQUEST,
    payload: {
      succes: true,
      loading: false,
      error: false,
      response
    },
  };
};
const errorDispatch = (error) => {
  return {
    type: types.FAILED_REQUEST,
    payload: {
      error: true,
      errorMsg: error
    }
  }
}
export const errorOkDispatch = () => {
  return {
    type: types.FAILED_REQUEST_OK,
    payload: {
      error: false
    }
  }
};

export const startMovieRequest = (request) => (dispatch) => {

  try {

    if (request.trim() === "") {
      const errorBody = {
        status_message: "You must type something to search"
      }
      throw (errorBody)
    }
    else {
      dispatch(start_request(request));
      dispatch(succesMovieRequest(request));
    }
  }
  catch (error) {
    dispatch(errorDispatch(error))
  }
};

export const succesMovieRequest = (request) => (dispatch) => {
  const movie_request = async () => {

    try {

      const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${request}`;
      const request_url = await fetch(baseUrl);
      const response = await request_url.json();

      if (request_url.status === 422) {

        const errorBody = {
          status_code: response.status_code,
          status_message: response.status_message
        }
        throw (errorBody)
      }

      else if (request_url.status === 404) {

        const errorBody = {
          status_code: response.status_code,
          status_message: response.status_message
        }
        throw (errorBody)
      }

      else {
        dispatch(response_body(response));
      }
    } catch (error) { 
      dispatch(errorDispatch(error)) };
  };
  movie_request();
};


/* REQUEST CATEGORIES */
const get_movies_cat = () => {
  return {
    type: types.GET_MOVIES_CATEGORIES,
    payload: {
      succes: false,
      loading: true,
    },
  }
};
const get_movies_cat_succ = (genres) => {
  return {
    type: types.GET_MOVIES_CATEGORIES_SUCCES,
    payload: {
      succes: true,
      loading: false,
      genres
    }
  }
};

export const startGetCategories = () => {
  return (dispatch) => {
    try {
      dispatch(get_movies_cat());
      dispatch(getCategories());
    }
    catch (error) {
      dispatch(errorDispatch(error));
    }
  }
};
export const getCategories = () => {
  return (dispatch) => {
    try {
      const movies_genres_request = async () => {
        const baseUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`;
        const request_genres = await fetch(baseUrl);
        const response_genres = await request_genres.json();
        const { genres } = await response_genres;
        dispatch(get_movies_cat_succ(genres));
        dispatch(startGetMoviesForCat(genres))
      }
      movies_genres_request();
    }
    catch (error) {
      dispatch(errorDispatch(error));
    }
  }
};

/* REQUEST MOVIES FOR CATEGORIES */
const start_get_movies_for_cat = () => {
  return {
    type: types.START_GET_MOVIES_FOR_CAT,
    payload: {
      succes: false,
      loading: true,
    }
  }
};
const get_movies_for_categorie = (moviesForGenre) => {
  return {
    type: types.GET_MOVIES_FOR_CAT,
    payload: {
      succes: true,
      loading: false,
      moviesForGenre
    }
  }
};

export const startGetMoviesForCat = (genres) => {
  return (dispatch) => {
    try {
      dispatch(start_get_movies_for_cat());
      genres.map(genre => dispatch(getMoviesForCat(genre.name)))
    }
    catch (error) {
      dispatch(errorDispatch(error));
    }
  }
};
export const getMoviesForCat = (genre) => {
  return (dispatch) => {
    try {
      const get_movies_for_cat = async () => {
        const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${genre}`;
        const request_movie_genre = await fetch(baseUrl);
        const response_movie_genre = await request_movie_genre.json();
        const { results } = await response_movie_genre;

        let moviesForGenre = {
          genre: genre,
          movies: results
        }
        dispatch(get_movies_for_categorie(moviesForGenre))
      }
      get_movies_for_cat();
    }
    catch (error) {
      dispatch(errorDispatch(error));
    }
  }
}

/* --- POST --- */

const start_post = () => {
  return {
    type: types.START_ADD_TO_LIST,
    payload: {
      succes: false,
      loading: true
    }
  }
}

const succes_post = () => {
  return {
    type: types.SUCCES_ADD_TO_LIST,
    payload: {
      succes: true,
      loading: false
    }
  }
}
