import {
  CHANGE_PERSPECTIVE,
  SET_AUTO_FLIP_PERSPECTIVE,
  HALF_BLIND_FETCHING,
  HALF_BLIND_FETCHED,
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

const initialGameState = {
  fetching: false,
  fetched: false,
  halfBlindFetched: false,
  autoFlipPerspective: true,
  perspectiveWhite: true,
  halfBlind: null,
  board: Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null)),
  moves: [],
  turnNumber: 0,
  inCheck: false,
  gameOver: -1,
  history: []
};

const gameReducer = (state = initialGameState, action) => {
  switch (action.type) {
    case CHANGE_PERSPECTIVE:
      return {
        ...state,
        perspectiveWhite: state.autoFlipPerspective
          ? state.turnNumber % 2 === 0 // If needed, wait for flip
          : state.perspectiveWhite
      };
    case SET_AUTO_FLIP_PERSPECTIVE:
      return {
        ...state,
        autoFlipPerspective: action.payload
      };
    case HALF_BLIND_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case HALF_BLIND_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        halfBlindFetched: true,
        halfBlind: action.payload
      };
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
        turnNumber: action.payload,
        perspectiveWhite: action.payload % 2 === 0
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
        halfBlind: state.turnNumber % 3 === 1 ? action.payload : null,
        board: state.board.map((row, i) => {
          return row.map((square, j) => {
            // Remove moved piece from square
            if (
              squareToIndices(action.payload.from)[0] === i &&
              squareToIndices(action.payload.from)[1] === j
            ) {
              return null;
            }
            // Place moved piece to square
            else if (
              squareToIndices(action.payload.to)[0] === i &&
              squareToIndices(action.payload.to)[1] === j
            ) {
              // Handle promotion
              return action.payload.promotion
                ? {
                    type: action.payload.promotion,
                    color: action.payload.color
                  }
                : {
                    type: action.payload.piece,
                    color: action.payload.color
                  };
            }
            // If en passant, remove captured piece
            else if (
              action.payload.flags === "e" &&
              ((action.payload.color === "w" &&
                squareToIndices(action.payload.to)[0] + 1 === i &&
                squareToIndices(action.payload.to)[1] === j) ||
                (action.payload.color === "b" &&
                  squareToIndices(action.payload.to)[0] - 1 === i &&
                  squareToIndices(action.payload.to)[1] === j))
            ) {
              return null;
            }
            // Kingside castle
            else if (action.payload.flags === "k") {
              // Remove rook
              if (
                squareToIndices(action.payload.to)[0] === i &&
                squareToIndices(action.payload.to)[1] + 1 === j
              ) {
                return null;
              }
              // Place rook
              else if (
                squareToIndices(action.payload.to)[0] === i &&
                squareToIndices(action.payload.to)[1] - 1 === j
              ) {
                return {
                  type: "r",
                  color: action.payload.color
                };
              } else {
                return square;
              }
            }
            // Queenside castle
            else if (action.payload.flags === "q") {
              // Remove rook
              if (
                squareToIndices(action.payload.to)[0] === i &&
                squareToIndices(action.payload.to)[1] - 2 === j
              ) {
                return null;
              }
              // Place rook
              else if (
                squareToIndices(action.payload.to)[0] === i &&
                squareToIndices(action.payload.to)[1] + 1 === j
              ) {
                return {
                  type: "r",
                  color: action.payload.color
                };
              } else {
                return square;
              }
            }
            // Return rest unchanged
            else {
              return square;
            }
          });
        }),
        turnNumber: state.turnNumber + 1,
        inCheck: state.inCheck ? false : state.inCheck,
        history: [...state.history, action.payload]
      };
    case RESET_GAME:
      return {
        ...state,
        halfBlind: null,
        board: action.payload,
        turnNumber: 0,
        inCheck: false,
        gameOver: -1,
        history: []
      };
    default:
      return state;
  }
};

export default gameReducer;
