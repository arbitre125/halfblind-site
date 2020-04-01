import {
  CONNECTION_FAILURE,
  USER_REGISTERING,
  USER_REGISTERED,
  USER_NOT_REGISTERED,
  USER_AUTHENTICATING,
  USER_AUTHENTICATED,
  USER_NOT_AUTHENTICATED,
  LOGOUT,
  NEW_OFFLINE_GAME_FETCHING,
  NEW_OFFLINE_GAME_FETCHED,
  NEW_ONLINE_GAME_FETCHING,
  NEW_ONLINE_GAME_FETCHED
} from "../types";
import setAuthorizationToken from "../../../utils/setAuthorizationToken";
import decode from "jwt-decode";
import axios from "axios";

const baseDomain =
  process.env.NODE_ENV === "production"
    ? "https://halfblind-server.herokuapp.com"
    : "";

export const registerAction = newUser => {
  return async dispatch => {
    dispatch({
      type: USER_REGISTERING
    });
    return await axios
      .post(`${baseDomain}/users/register`, {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        confirmPassword: newUser.confirmPassword
      })
      .then(res => {
        if (res.status === 200) {
          if (res.data.error) {
            dispatch({
              type: USER_NOT_REGISTERED,
              payload: res.data.error
            });
          } else if (res.data.token) {
            dispatch({
              type: USER_REGISTERED
            });
          } else {
            console.log(res);
            dispatch({
              type: CONNECTION_FAILURE
            });
          }
        }
      })
      .catch(err => console.log(err));
  };
};

export const loginAction = (history, user) => {
  return async dispatch => {
    dispatch({
      type: USER_AUTHENTICATING
    });
    console.log(`${baseDomain}/users/login`);
    return await axios
      .post(`${baseDomain}/users/login`, user)
      .then(res => {
        if (res.status === 200) {
          if (res.data.token) {
            localStorage.setItem("usertoken", res.data.token);
            setAuthorizationToken(res.data.token);
            dispatch({
              type: USER_AUTHENTICATED,
              payload: decode(res.data.token)
            });
            history.push("/");
          } else if (res.data.error) {
            dispatch({
              type: USER_NOT_AUTHENTICATED,
              payload: res.data.error
            });
          } else {
            console.log(res);
            dispatch({
              type: CONNECTION_FAILURE
            });
          }
        }
      })
      .catch(err => console.log(err));
  };
};

export const logoutAction = (username, currentGameId, history) => {
  return async dispatch => {
    return await axios
      .post(`${baseDomain}/games/delete`, {
        username,
        currentGameId
      })
      .then(() => {
        localStorage.clear();
        dispatch({ type: LOGOUT });
        history.push("/login");
      })
      .catch(err => console.log(err));
  };
};

export const newOfflineGameAction = (username, history) => {
  return async dispatch => {
    dispatch({ type: NEW_OFFLINE_GAME_FETCHING });
    console.log(username);
    return await axios
      .post(`${baseDomain}/games/offline/newgame`, {
        username
      })
      .then(res => {
        localStorage.setItem("offlineGame", true);
        dispatch({ type: NEW_OFFLINE_GAME_FETCHED });
        history.push(`/game/offline/${username}`);
      })
      .catch(err => console.log(err));
  };
};

export const newOnlineGameAction = history => {
  return async dispatch => {
    dispatch({ type: NEW_ONLINE_GAME_FETCHING });

    return await axios
      .post(`${baseDomain}/games/newgame`)
      .then(res => {
        localStorage.setItem("currentGameId", res.data);
        dispatch({ type: NEW_ONLINE_GAME_FETCHED, payload: res.data });
        history.push(`/game/${res.data}`);
      })
      .catch(err => console.log(err));
  };
};
