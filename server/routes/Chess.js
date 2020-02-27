const express = require("express");
const game = express.Router();
const Chess = require("../chess/chess").Chess;

let chess_games = {};

game.get(`/all`, (req, res) => {
  res.send(chess_games);
});

game.post(`/newgame`, (req, res) => {
  console.log(req.body.id);
  const chess = new Chess();
  chess_games[req.body.id] = chess;
  res.send(true);
});

game.get(`/`, (req, res) => {
  if (chess_games[req.query.id]) {
    res.send({
      board: chess_games[req.query.id].board(),
      turn: chess_games[req.query.id].turn(),
      turnNumber: chess_games[req.query.id].turn_number(),
      moves: chess_games[req.query.id].moves({ verbose: true }),
      history: chess_games[req.query.id].history({ verbose: false }),
      inCheck: chess_games[req.query.id].in_check(),
      gameOver: chess_games[req.query.id].game_over(),
      inCheckmate: chess_games[req.query.id].in_checkmate(),
      inDraw: chess_games[req.query.id].in_draw(),
      inStalemate: chess_games[req.query.id].in_stalemate(),
      insufficientMaterial: chess_games[req.query.id].insufficient_material(),
      inThreeFoldRepetition: chess_games[req.query.id].in_threefold_repetition()
    });
  } else {
    res.send("No game with that id!");
  }
});

game.post(`/move`, (req, res) => {
  const moveAttempt = chess_games[req.body.id].move(req.body.move);
  if (moveAttempt) {
    res.send(moveAttempt);
  } else {
    res.send(null); // check if this is needed
  }
});

module.exports = game;
