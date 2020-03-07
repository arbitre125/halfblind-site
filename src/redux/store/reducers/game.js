import { BOARD_FETCHING, BOARD_FETCHED } from "../types";

const initialState = {
  fetching: false,
  fetched: false,
  board: Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null))
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case BOARD_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        board: action.payload
      };
    default:
      return state;
  }
};

export default gameReducer;
