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

export const loginAction = user => {
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

export const logoutAction = currentGameId => {
  return async dispatch => {
    return await axios
      .post(`/game/${currentGameId}/delete`)
      .then(res => {
        localStorage.clear();
        dispatch({ type: USER_NOT_AUTHENTICATED });
        return res;
      })
      .catch(err => console.log(err));
  };
};

export const newGameAction = () => {
  return async dispatch => {
    dispatch({ type: NEW_GAME_FETCHING });

    return await axios
      .post(`/game/newgame`)
      .then(res => {
        dispatch({ type: NEW_GAME_FETCHED, payload: res.data });
        return res.data;
      })
      .catch(err => console.log(err));
  };
};
