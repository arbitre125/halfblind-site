import {
  USER_AUTHENTICATING,
  USER_AUTHENTICATED,
  USER_NOT_AUTHENTICATED,
  NEW_GAME_FETCHING,
  NEW_GAME_FETCHED
} from "../types";

const initialUserState = {
  fetching: false,
  fetched: false,
  userLogged: false,
  userDetails: {},
  currentGameId: null
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_AUTHENTICATING:
      return {
        ...state,
        fetching: true
      };
    case USER_AUTHENTICATED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        userLogged: true,
        userDetails: action.payload
      };
    case USER_NOT_AUTHENTICATED:
      return {
        ...state,
        userLogged: false,
        userDetails: {},
        fetching: false,
        currentGameId: null
      };
    case NEW_GAME_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case NEW_GAME_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        currentGameId: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
