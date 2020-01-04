import React from "react";
import ChessBoard from "./containers/ChessBoard";
import InputMove from "./components/InputMove";
import chess from "./index";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const makeMove = move => {
    chess.move(move);
    // not rerendering
  };

  return (
    <div>
      <ChessBoard position={chess.board()} perspective="white" />
      <InputMove makeMove={makeMove} />
    </div>
  );
}

export default App;
