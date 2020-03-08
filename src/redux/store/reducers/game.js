import {
  BOARD_FETCHING,
  BOARD_FETCHED,
  MOVES_FETCHING,
  MOVES_FETCHED,
  HISTORY_FETCHING,
  HISTORY_FETCHED,
  GAME_OVER_FETCHING,
  GAME_OVER_FETCHED,
  MAKE_MOVE,
  RESET_GAME
} from "../types";
import { squareToIndices } from "../../../helpers/squareIndices";

const initialState = {
  fetching: false,
  fetched: false,
  board: Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null)),
  moves: [],
  history: [],
  gameOver: -1
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
    case MOVES_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case MOVES_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        moves: action.payload
      };
    case HISTORY_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case HISTORY_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        history: action.payload
      };
    case GAME_OVER_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case GAME_OVER_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        gameOver: action.payload
      };
    case MAKE_MOVE:
      return {
        ...state,
        board: state.board.map((row, i) =>
          row.map((square, j) =>
            squareToIndices(action.payload.from)[0] === i &&
            squareToIndices(action.payload.from)[1] === j
              ? null
              : squareToIndices(action.payload.to)[0] === i &&
                squareToIndices(action.payload.to)[1] === j
              ? { type: action.payload.piece, color: action.payload.color }
              : square
          )
        ),
        history: [...state.history, action.payload.san]
      };
    case RESET_GAME:
      return {
        ...state,
        board: action.payload,
        history: []
      };
    default:
      return state;
  }
};

export default gameReducer;
