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

const initialUserState = {
  fetching: false,
  fetched: false,
  registerError: null,
  loginError: null,
  userLogged: false,
  userDetails: {},
  offlineGame: false,
  currentGameId: null
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_REGISTERING:
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case USER_REGISTERED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        registerError: null
      };
    case USER_NOT_REGISTERED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        registerError: action.payload
      };
    case USER_AUTHENTICATING:
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case USER_AUTHENTICATED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        loginError: null,
        userLogged: true,
        userDetails: action.payload
      };
    case USER_NOT_AUTHENTICATED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        loginError: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        fetching: false,
        fetched: false, // so no alert @ login redirect
        userLogged: false,
        userDetails: {},
        offlineGame: false,
        currentGameId: null
      };
    case NEW_OFFLINE_GAME_FETCHING:
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case NEW_OFFLINE_GAME_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        offlineGame: true
      };
    case NEW_ONLINE_GAME_FETCHING:
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case NEW_ONLINE_GAME_FETCHED:
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
