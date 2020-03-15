const express = require("express");
const game = express.Router();
// DOCS: https://github.com/jhlywa/chess.js/blob/master/README.md
const Chess = require("../chess/chess").Chess;
const uuid = require("uuid");

let chess_games = {};

game.get(`/all`, (req, res) => {
  res.send(Object.keys(chess_games));
});

game.post(`/newgame`, (req, res) => {
  const chess = new Chess("1k2b3/5P2/8/8/8/8/8/1K6 w - - 0 1");
  const id = uuid().slice(0, 8);
  chess_games[id] = chess;
  res.send(id);
});

game.get(`/:gameId`, (req, res) => {
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

game.post(`/:gameId/move`, (req, res) => {
  const moveAttempt = chess_games[req.params.gameId].move(req.body.move);
  res.send(moveAttempt);
});

game.post(`/:gameId/reset`, (req, res) => {
  res.send(chess_games[req.params.gameId].reset());
});

game.post(`/:gameId/delete`, (req, res) => {
  delete chess_games[req.params.gameId];
  res.send(true);
});

module.exports = game;
