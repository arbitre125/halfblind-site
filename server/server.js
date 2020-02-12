const express = require("express");
const bodyParser = require("body-parser");
const Chess = require("./chess/chess").Chess;

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const chess = new Chess(
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2"
);

app.get("/api/board", (req, res) => {
  res.send(chess.ascii());
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  if (chess.move(req.body.post)) {
    res.send(`The move: ${req.body.post} was made`);
  } else {
    res.send(`${req.body.post} is an invalid move`);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
