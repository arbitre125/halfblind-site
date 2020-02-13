const express = require("express");
const bodyParser = require("body-parser");
const Chess = require("./chess/chess").Chess;
const uuid = require("uuid");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const chess = new Chess(
  "r1bqkbnr/pppp1ppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq - 1 4"
);
const id = "id";

app.get(`/game/${id}`, (req, res) => {
  res.send({
    board: chess.board(),
    turn: chess.turn(),
    turnNumber: chess.turn_number(),
    moves: chess.moves({ verbose: true }),
    history: chess.history({ verbose: false }),
    inCheck: chess.in_check(),
    gameOver: chess.game_over(),
    inCheckmate: chess.in_checkmate(),
    inStalemate: chess.in_stalemate(),
    inDraw: chess.in_draw(),
    insufficientMaterial: chess.insufficient_material(),
    inThreeFoldRepetition: chess.in_threefold_repetition()
  });
});

app.post(`/game/${id}/move`, (req, res) => {
  const moveAttempt = chess.move(req.body.move);
  if (moveAttempt) {
    console.log("Move:", req.body.move);
    res.send(moveAttempt);
  } else {
    res.send(null);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
