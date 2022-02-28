import { types } from "../types/types";
import { KEY } from "../../hooks/APIKEY";

const start_request = () => {
  return {
    type: types.START_REQUEST,
    payload: {
      succes: false,
      loading: true,
    },
  };
};

const response_body = (response) => {
  return {
    type: types.SUCCES_REQUEST,
    payload: {
      succes: true,
      loading: false,
      response,
    },
  };
};

export const startMovieRequest = (request) => {
  return (dispatch) => {
    dispatch(start_request());
    dispatch(succesMovieRequest(request));
  };
};
export const succesMovieRequest = (request) => {
  return (dispatch) => {
    const movie_request = async () => {
      const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${request}`;
      const request_url = await fetch(baseUrl);
      const response = await request_url.json();
      dispatch(response_body(response));
    };
    movie_request();
  };
};
