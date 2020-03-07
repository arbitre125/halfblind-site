import axios from "axios";
import { BOARD_FETCHING, BOARD_FETCHED } from "../types";

export const fetchBoardAction = id => {
  return dispatch => {
    dispatch({
      type: BOARD_FETCHING
    });

    return axios
      .get(`/game/${id}`)
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
