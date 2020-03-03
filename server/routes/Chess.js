const express = require("express");
const game = express.Router();
const Chess = require("../chess/chess").Chess;
const uuid = require("uuid");

let chess_games = {};

game.get(`/all`, (req, res) => {
  res.send(chess_games);
});

game.post(`/newgame`, (req, res) => {
  const chess = new Chess();
  const id = uuid().slice(0, 8);
  chess_games[id] = chess;
  res.send(id);
});

game.get(`/:gameId`, (req, res) => {
  if (chess_games[req.params.gameId]) {
    res.send({
      board: chess_games[req.params.gameId].board(),
      turn: chess_games[req.params.gameId].turn(),
      turnNumber: chess_games[req.params.gameId].turn_number(),
      moves: chess_games[req.params.gameId].moves({ verbose: true }),
      history: chess_games[req.params.gameId].history({ verbose: false }),
      inCheck: chess_games[req.params.gameId].in_check(),
      gameOver: chess_games[req.params.gameId].game_over(),
      inCheckmate: chess_games[req.params.gameId].in_checkmate(),
      inDraw: chess_games[req.params.gameId].in_draw(),
      inStalemate: chess_games[req.params.gameId].in_stalemate(),
      insufficientMaterial: chess_games[
        req.params.gameId
      ].insufficient_material(),
      inThreeFoldRepetition: chess_games[
        req.params.gameId
      ].in_threefold_repetition()
    });
  } else {
    res.send("There is no game with that id.");
  }
});

game.post(`/:gameId/move`, (req, res) => {
  const moveAttempt = chess_games[req.params.gameId].move(req.body.move);
  if (moveAttempt) {
    res.send(moveAttempt);
  } else {
    res.send(null); // check if this is needed
  }
});

game.post(`/:gameId/reset`, (req, res) => {
  res.send(chess_games[req.params.gameId].reset());
});

module.exports = game;
