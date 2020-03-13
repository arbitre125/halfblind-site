import {
  USER_AUTHENTICATING,
  USER_AUTHENTICATED,
  USER_NOT_AUTHENTICATED,
  NEW_GAME_FETCHING,
  NEW_GAME_FETCHED
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

export const logoutAction = (history, currentGameId) => {
  return async dispatch => {
    return await axios
      .post(`/game/${currentGameId}/delete`)
      .then(() => {
        localStorage.clear();
        dispatch({ type: USER_NOT_AUTHENTICATED });
        history.push("/login");
      })
      .catch(err => console.log(err));
  };
};

export const newGameAction = history => {
  return async dispatch => {
    dispatch({ type: NEW_GAME_FETCHING });

    return await axios
      .post(`/game/newgame`)
      .then(res => {
        localStorage.setItem("currentGameId", res.data);
        dispatch({ type: NEW_GAME_FETCHED, payload: res.data });
        history.push(`/game/${res.data}`);
      })
      .catch(err => console.log(err));
  };
};
