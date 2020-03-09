import {
  BOARD_FETCHING,
  BOARD_FETCHED,
  MOVES_FETCHING,
  MOVES_FETCHED,
  TURN_NUMBER_FETCHING,
  TURN_NUMBER_FETCHED,
  IN_CHECK_FETCHING,
  IN_CHECK_FETCHED,
  GAME_OVER_FETCHING,
  GAME_OVER_FETCHED,
  HISTORY_FETCHING,
  HISTORY_FETCHED,
  MAKE_MOVE,
  RESET_GAME
} from "../types";
import { squareToIndices } from "../../../helpers/squareIndices";

const initialState = {
  fetching: false,
  fetched: false,
  board: Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null)),
  moves: [],
  turnNumber: 0,
  inCheck: false,
  gameOver: -1,
  history: []
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
    case TURN_NUMBER_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case TURN_NUMBER_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        turnNumber: action.payload
      };
    case IN_CHECK_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case IN_CHECK_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        inCheck: action.payload
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
        turnNumber: state.turnNumber + 1,
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
