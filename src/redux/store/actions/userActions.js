import {
  USER_AUTHENTICATING,
  USER_AUTHENTICATED,
  USER_NOT_AUTHENTICATED,
  NEW_OFFLINE_GAME_FETCHING,
  NEW_OFFLINE_GAME_FETCHED,
  NEW_ONLINE_GAME_FETCHING,
  NEW_ONLINE_GAME_FETCHED
} from "../types";
import setAuthorizationToken from "../../../utils/setAuthorizationToken";
import decode from "jwt-decode";
import axios from "axios";

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
          } else {
            dispatch({
              type: USER_NOT_AUTHENTICATED
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
      .post(`/game/delete`, { username, currentGameId })
      .then(() => {
        localStorage.clear();
        dispatch({ type: USER_NOT_AUTHENTICATED });
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
