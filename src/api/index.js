import axios from "axios";

//CREATE

//READ

export const readBoard = (id, setBoardPosition) => {
  axios
    .get(`/game/${id}`)
    .then(response => setBoardPosition(response.data.board))
    .catch(err => console.log(err));
};

export const readGameOver = id => {
  axios
    .get(`/game/${id}`)
    .then(response => response.data.gameOver)
    .catch(err => console.log(err));
};

export const readTurnNumber = id => {
  axios
    .get(`/game/${id}`)
    .then(response => response.data.turnTumber)
    .catch(err => console.log(err));
};

//UPDATE

export const updateMove = (id, move) => {
  axios
    .post(`/game/${id}/move`, { move })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

//DELETE
