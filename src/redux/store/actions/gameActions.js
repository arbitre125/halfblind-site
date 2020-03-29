import axios from "axios";
import {
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

export const fetchHalfBlindAction = id => {
  return dispatch => {
    dispatch({
      type: HALF_BLIND_FETCHING
    });

    return axios
      .get(`https://halfblind-server.herokuapp.com/games/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: HALF_BLIND_FETCHED,
            payload: res.data.halfBlind
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchBoardAction = id => {
  return dispatch => {
    dispatch({
      type: BOARD_FETCHING
    });

    return axios
      .get(`https://halfblind-server.herokuapp.com/games/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: BOARD_FETCHED,
            payload: res.data.board
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchMovesAction = id => {
  return dispatch => {
    dispatch({
      type: MOVES_FETCHING
    });

    return axios
      .get(`https://halfblind-server.herokuapp.com/games/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: MOVES_FETCHED,
            payload: res.data.moves
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchTurnNumberAction = id => {
  return dispatch => {
    dispatch({
      type: TURN_NUMBER_FETCHING
    });

    return axios
      .get(`https://halfblind-server.herokuapp.com/games/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: TURN_NUMBER_FETCHED,
            payload: res.data.turnNumber
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchInCheckAction = id => {
  return dispatch => {
    dispatch({
      type: IN_CHECK_FETCHING
    });

    return axios
      .get(`https://halfblind-server.herokuapp.com/games/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: IN_CHECK_FETCHED,
            payload: res.data.inCheck
          });
          if (res.data.inCheck) {
            dispatch(fetchGameOverAction(id));
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchGameOverAction = id => {
  return dispatch => {
    dispatch({
      type: GAME_OVER_FETCHING
    });

    return axios
      .get(`https://halfblind-server.herokuapp.com/games/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: GAME_OVER_FETCHED,
            // Game on: return -1
            // Game over mate: return 0 for W mate, 1 for B mate
            // Game over draw: return 2 for stale, 3 for insuff, 4 for 3rep
            payload: res.data.gameOver
              ? res.data.inCheckmate
                ? res.data.turn === "b"
                  ? 0
                  : 1
                : res.data.inStalemate
                ? 2
                : res.data.insufficientMaterial
                ? 3
                : 4
              : -1
          });
        }
      })
      .catch(err => console.log(err));
  };
};

export const fetchHistoryAction = id => {
  return dispatch => {
    dispatch({
      type: HISTORY_FETCHING
    });

    return axios
      .get(`https://halfblind-server.herokuapp.com/games/${id}`)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: HISTORY_FETCHED,
            payload: res.data.history
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// Make move client-side based on valid-move-call to server
// (returns: valid ? moveObj : "")
export const makeMoveAction = (id, move) => {
  return dispatch => {
    return axios
      .post(`https://halfblind-server.herokuapp.com/games/${id}/move`, { move })
      .then(res => {
        if (res.status === 200 && res.data !== "") {
          dispatch({
            type: MAKE_MOVE,
            payload: res.data
          });
          dispatch(fetchInCheckAction(id));
        }
      })
      .catch(err => console.log(err));
  };
};

export const resetGameAction = id => {
  return dispatch => {
    return axios
      .post(`https://halfblind-server.herokuapp.com/games/${id}/reset`)
      .then(async res => {
        if (res.status === 200) {
          // Get board (going to be startPos)
          const board = await axios
            .get(`https://halfblind-server.herokuapp.com/games/${id}`)
            .then(res => res.data.board)
            .catch(err => console.log(err));
          dispatch({
            type: RESET_GAME,
            payload: board
          });
        }
      })
      .catch(err => console.log(err));
  };
};
