const express = require("express");
const bodyParser = require("body-parser");
const Chess = require("./chess/chess").Chess;

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const chess = new Chess();

app.get("/api/chess", (req, res) => {
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

app.post("/api/move", (req, res) => {
  console.log("Move:", req.body);
  if (chess.move(req.body.post)) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
