import React, { useState } from "react";
import ChessBoard from "./ChessBoard";
import InputMove from "../components/InputMove";
import GameOver from "../components/GameOver";
import chess from "../index";

function GameWindow(props) {
  const [boardPosition, setBoardPosition] = useState(chess.board());
  const [showGameOverWindow, setShowGameOverWindow] = useState(false);

  const makeMove = move => {
    chess.move(move);
    setBoardPosition(chess.board());
    console.log(chess.move_number());
    if (chess.game_over()) {
      setShowGameOverWindow(true);
    }
  };

  return (
    <div>
      <ChessBoard
        perspective="white"
        size={props.size}
        position={boardPosition}
      />
      <InputMove makeMove={makeMove} />
      {showGameOverWindow && <GameOver />}
    </div>
  );
}

export default GameWindow;
