import { types } from "../types/types";
import { KEY } from "../../hooks/APIKEY";

const initLogin = (user, password, ) => {
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
      userData_response
    }
  };
};

export const startLogin = (user, password) => {
  return (dispatch) => {
    const fetchToken = async () => {
      const baseUrl =
        await `https://api.themoviedb.org/3/authentication/token/new?api_key=${KEY}`;
      const request_token_fetch = await fetch(baseUrl);
      const request_token_response = await request_token_fetch.json();
      const { request_token } = request_token_response;
      saveToken(request_token);
      //console.log("Request token: " + request_token);
      
      dispatch(initLogin(user, password));
      dispatch(requestToken(user, password, localStorage.getItem('request_token')));
    };
    fetchToken();
  };
};

export const requestToken = (user, password, token) => {
  return (dispatch) => {

    const authFetch = async () => {

      const auth_Token_Url =
        await `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${KEY}&username=${user}&password=${password}&request_token=${token}`;
      const authToken_request = await fetch(auth_Token_Url);
      const authToken_response = await authToken_request.json();
      const { request_token } = await authToken_response;
      saveToken(request_token);

      dispatch(getAuthUser(user, password));
      dispatch(requestSessionId(user, password, localStorage.getItem('request_token')));
    };
    authFetch();
  };
};

export const requestSessionId = (user, password, token) => {
  return (dispatch) => {
    const requestSessionIdFetch = async () => {
      const sessionIdUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${KEY}&username=${user}&password=${password}&request_token=${token}`;
      const sessionId = await fetch(sessionIdUrl);
      const sessionId_response = await sessionId.json();
      const { session_id } = sessionId_response;
      saveSession_id(session_id);
      //console.log("Session Id: " + session_id);

      dispatch(userSessionId(user, password));
      dispatch(getUserInfo(localStorage.getItem('session_id')));
    };
    requestSessionIdFetch();
  };
};

export const getUserInfo = (session_id) => {
  return (dispatch) => {
    const requestUserInfo = async () => {
      const request_user_DataURL = `https://api.themoviedb.org/3/account?api_key=${KEY}&session_id=${session_id}`;
      const userData_request = await fetch(request_user_DataURL);
      const userData_response = await userData_request.json();
      //console.log(userData_response);

      dispatch(userData(userData_response));
    };
    requestUserInfo();
  };
};

export const logoutUser = () =>{

  localStorage.removeItem('request_token');
  localStorage.removeItem( 'session_id');
  return {
    type: types.LOGOUT,
    payload: {
      
    }
  };
}

const saveToken = (request_token) => {
  localStorage.setItem('request_token', request_token);
};

const saveSession_id = (session_id) =>{
  localStorage.setItem('session_id', session_id);
};