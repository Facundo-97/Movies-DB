import { types } from '../types/types';
import { KEY } from '../../hooks/APIKEY';
import { startGetCategories } from './request';

const initLogin = (user, password,) => {
  return {
    type: types.START_LOGIN,
    payload: {
      user,
      password,
      loading: true,
    },
  };
};
const getAuthUser = (user, password) => {
  return {
    type: types.AUTH_USER,
    payload: {
      user,
      password,
      auth_user: true,
      loading: true,
    },
  };
};

const userSessionId = (user, password) => {
  return {
    type: types.SUCCES_LOGIN,
    payload: {
      user,
      password,
      login_succes: true,
      loading: false,
    },
  };
};

const userData = (userData_response) => {
  return {
    type: types.GET_USER_INFO,
    payload: {
      loading: true,
      userData_response
    }
  };
};

const userLists = (response_user_list) => {
  return {
    type: types.GET_USER_LISTS,
    payload: {
      loading: false,
      response_user_list
    }
  };
};

const errorDispatch = (error) => {
  return {
    type: types.ERROR,
    payload: {
      auth_user: false,
      login_succes: false,
      error: true,
      errorMsg: error
    }
  }
};

export const errorOkDispatch = () => {
  return {
    type: types.ERROR_OK,
    payload: {
      loading: false,
      error: false
    }
  }
};

export const startLogin = (user, password) => (dispatch) => {

  const fetchToken = async () => {

    try {

      const baseUrl = await `https://api.themoviedb.org/3/authentication/token/new?api_key=${KEY}`;
      const request_token_fetch = await fetch(baseUrl);

      if (request_token_fetch.status === 401) {

        const request_token_response = await request_token_fetch.json();

        const errorBody = {
          status_code: request_token_response.status_code,
          status_message: request_token_response.status_message
        }
        throw (errorBody)
      }
      else if (request_token_fetch.status === 404) {

        const request_token_response = await request_token_fetch.json();
        const errorBody = {
          status_code: request_token_response.status_code,
          status_message: request_token_response.status_message
        }
        throw (errorBody)

      }
      else {

        const request_token_response = await request_token_fetch.json();
        const { request_token } = request_token_response;

        saveToken(request_token);
        dispatch(initLogin(user, password));
        dispatch(requestToken(user, password, localStorage.getItem('request_token')));

      }
    }
    catch (error) { dispatch(errorDispatch(error)) }

  };
  fetchToken();
};

export const requestToken = (user, password, token) => (dispatch) => {
  const authFetch = async () => {

    try {

      const auth_Token_Url = await `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${KEY}&username=${user}&password=${password}&request_token=${token}`;
      const authToken_request = await fetch(auth_Token_Url);

      if (authToken_request.status === 401) {

        const authToken_response = await authToken_request.json();

        const errorBody = {
          status_code: authToken_response.status_code,
          status_message: authToken_response.status_message
        }
        throw (errorBody)

      }
      else if (authToken_request.status === 404) {

        const authToken_response = await authToken_request.json();
        throw authToken_response.status_code(authToken_response.status_code, authToken_response.status_message);

      }
      else {

        const authToken_response = await authToken_request.json();
        const { request_token } = await authToken_response;

        saveToken(request_token);
        dispatch(getAuthUser(user, password));
        dispatch(requestSessionId(user, password, localStorage.getItem('request_token')));

      }

    }
    catch (error) {
      dispatch(errorDispatch(error))
    }
  };
  authFetch();
};

export const requestSessionId = (user, password, token) => (dispatch) => {
  const requestSessionIdFetch = async () => {

    try {

      const sessionIdUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${KEY}&username=${user}&password=${password}&request_token=${token}`;
      const sessionId = await fetch(sessionIdUrl);

      if (sessionId.status === 401) {

        const sessionId_response = await sessionId.json();
        const errorBody = {
          status_code: sessionId_response.status_code,
          status_message: sessionId_response.status_message
        }
        throw (errorBody)

      }
      else if (sessionId.status === 404) {

        const sessionId_response = await sessionId.json();
        const errorBody = {
          status_code: sessionId_response.status_code,
          status_message: sessionId_response.status_message
        }
        throw (errorBody)

      }
      else {
        const sessionId_response = await sessionId.json();
        const { session_id } = sessionId_response;

        saveSession_id(session_id);
        dispatch(getUserInfo(localStorage.getItem('session_id')));
        dispatch(userSessionId(user, password));
      }
    }
    catch (error) { dispatch(errorDispatch(error)) }
  };
  requestSessionIdFetch();
};

export const getUserInfo = (session_id) => {
  return (dispatch) => {
    const requestUserInfo = async () => {

      try {

        const request_user_DataURL = `https://api.themoviedb.org/3/account?api_key=${KEY}&session_id=${session_id}`;
        const userData_request = await fetch(request_user_DataURL);

        if (userData_request.status === 401) {

          const userData_response = await userData_request.json();
          const errorBody = {
            status_code: userData_response.status_code,
            status_message: userData_response.status_message
          }
          throw (errorBody)
        }
        else if (userData_request.status === 404) {

          const userData_response = await userData_request.json();
          const errorBody = {
            status_code: userData_response.status_code,
            status_message: userData_response.status_message
          }
          throw (errorBody)

        }
        else {

          const userData_response = await userData_request.json();

          dispatch(startGetCategories())
          dispatch(userData(userData_response));
          dispatch(getUserLists(userData_response))

        }
      }
      catch (error) { dispatch(errorDispatch(error)) }
    };
    requestUserInfo();
  };
};

export const getUserLists = ({ id }) => {
  return (dispatch) => {

    const requestUserLists = async () => {

      try {

        const baseUrl = `https://api.themoviedb.org/3/account/${id}/lists?api_key=${KEY}&language=en-US&session_id=${localStorage.getItem('session_id')}&page=1`
        const request_user_list = await fetch(baseUrl);

        if (request_user_list.status === 401) {

          const response_user_list = await request_user_list.json();
          const errorBody = {
            status_code: response_user_list.status_code,
            status_message: response_user_list.status_message
          }
          throw (errorBody)

        }
        else if (request_user_list.status === 404) {

          const response_user_list = await request_user_list.json();
          const errorBody = {
            status_code: response_user_list.status_code,
            status_message: response_user_list.status_message
          }
          throw (errorBody)

        }
        else {
          const response_user_list = await request_user_list.json();

          dispatch(userLists(response_user_list));
        }
      }
      catch (error) { dispatch(errorDispatch(error)) }
    };
    requestUserLists();
  };
};

export const logoutUser = () => {

  localStorage.removeItem('request_token');
  localStorage.removeItem('session_id');

  return {
    type: types.LOGOUT,
    payload: {}
  };
};

const saveToken = (request_token) => {
  localStorage.setItem('request_token', request_token);
};

const saveSession_id = (session_id) => {
  localStorage.setItem('session_id', session_id);
};