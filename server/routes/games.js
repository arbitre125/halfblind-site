const express = require("express");
const games = express.Router();
// DOCS: https://github.com/jhlywa/chess.js/blob/master/README.md
const Chess = require("../chess/chess").Chess;
const uuid = require("uuid");

let chess_games = {};

games.get(`/`, (req, res) => {
  res.send(Object.keys(chess_games));
});

games.get(`/:gameId`, (req, res) => {
  if (chess_games[req.params.gameId]) {
    const gameMatch = chess_games[req.params.gameId];
    res.send({
      board: gameMatch.board(),
      turn: gameMatch.turn(),
      turnNumber: gameMatch.turn_number(),
      halfBlind:
        gameMatch.turn_number() % 3 === 2
          ? gameMatch.history({ verbose: true })[
              gameMatch.history({ verbose: false }).length - 1
            ]
          : null,
      moves: gameMatch.moves({ verbose: true }),
      inCheck: gameMatch.in_check(),
      gameOver: gameMatch.game_over(),
      inCheckmate: gameMatch.in_checkmate(),
      inDraw: gameMatch.in_draw(),
      inStalemate: gameMatch.in_stalemate(),
      insufficientMaterial: gameMatch.insufficient_material(),
      inThreeFoldRepetition: gameMatch.in_threefold_repetition(),
      history: gameMatch.history({ verbose: true })
    });
  } else {
    res.send("There is no game with that id.");
  }
});

games.post(`/offline/newgame`, (req, res) => {
  const chess = new Chess();
  const id = req.body.username;
  console.log(id);
  chess_games[id] = chess;
  res.send(id);
});

games.post(`/newgame`, (req, res) => {
  const chess = new Chess();
  const id = uuid().slice(0, 8);
  chess_games[id] = chess;
  res.send(id);
});

games.post(`/:gameId/move`, (req, res) => {
  const moveAttempt = chess_games[req.params.gameId].move(req.body.move);
  res.send(moveAttempt);
});

games.post(`/:gameId/reset`, (req, res) => {
  res.send(chess_games[req.params.gameId].reset());
});

games.post(`/delete`, (req, res) => {
  delete chess_games[req.body.username];
  delete chess_games[req.body.currentGameId];
  res.send(true);
});

module.exports = games;
