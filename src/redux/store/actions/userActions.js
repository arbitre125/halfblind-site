import { LOGIN, LOGOUT, NEW_GAME } from "../types";

export const loginAction = payload => {
  return {
    type: LOGIN,
    payload
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT
  };
};

export const newGameAction = payload => {
  return {
    type: NEW_GAME,
    payload
  };
};
