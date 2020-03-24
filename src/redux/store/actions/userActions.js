import {
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

export const registerAction = newUser => {
  return async dispatch => {
    dispatch({
      type: USER_REGISTERING
    });
    return await axios
      .post("/users/register", {
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
          } else {
            dispatch({
              type: USER_REGISTERED
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
    return await axios
      .post("/users/login", user)
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
          } // maybe else: logout for saftey
        }
      })
      .catch(err => console.log(err));
  };
};

export const logoutAction = (username, currentGameId, history) => {
  return async dispatch => {
    return await axios
      .post(`/game/delete`, { username, currentGameId })
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
      .post(`/game/offline/newgame`, { username })
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
      .post(`/game/newgame`)
      .then(res => {
        localStorage.setItem("currentGameId", res.data);
        dispatch({ type: NEW_ONLINE_GAME_FETCHED, payload: res.data });
        history.push(`/game/${res.data}`);
      })
      .catch(err => console.log(err));
  };
};
