const express = require("express");
const bodyParser = require("body-parser");
const Chess = require("./chess/chess").Chess;

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const chess = new Chess();

app.get("/api/board", (req, res) => {
  res.send(chess.board());
});

app.get("/api/moves", (req, res) => {
  res.send(chess.moves({ verbose: true }));
});

app.get("/api/turn_number", (req, res) => {
  res.send(chess.turn_number());
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
