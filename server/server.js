const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const Users = require("./routes/Users");

app.use("/users", Users);

// Building chess api

const Chess = require("./chess/chess").Chess;

const chess = new Chess("8/8/8/8/1k6/8/1p6/1K6 b - - 0 1");
const id = 123;

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
    inDraw: chess.in_draw(),
    inStalemate: chess.in_stalemate(),
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
    res.send(null); // check if this is needed
  }
});

app.post(`/game/${id}/newgame`, (req, res) => {
  console.log("New game!");
  chess.reset();
  res.send(true);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
