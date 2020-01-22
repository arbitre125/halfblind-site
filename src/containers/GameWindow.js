import React, { useState } from "react";
import ChessBoard from "./ChessBoard";
import InputMove from "../components/InputMove";
import GameOver from "../components/GameOver";
import chess from "../index";

function GameWindow(props) {
  const [boardPosition, setBoardPosition] = useState(chess.board());
  const [hiddenPiece, setHiddenPiece] = useState(null);
  const [showGameOverWindow, setShowGameOverWindow] = useState(false);

  const makeMove = move => {
    const thisMove = chess.move(move);
    if (thisMove !== null) {
      setBoardPosition(chess.board());
      console.log(move);
      console.log(chess.board());
      console.log(chess.turn());
      if (chess.turn_number() % 3 === 2) {
        setHiddenPiece({
          toSquare: thisMove.to,
          fromSquare: thisMove.from,
          color: thisMove.color,
          piece: thisMove.piece
        });
      } else if (chess.turn_number() % 3 === 0) {
        setHiddenPiece(null);
      }
      if (chess.game_over()) {
        setShowGameOverWindow(true);
      }
    }
  };

  const getMoves = square => {
    return chess.moves({ square: square, end: true });
  };

  return (
    <div>
      <ChessBoard
        perspective="white"
        size={props.size}
        position={boardPosition}
        hiddenPiece={hiddenPiece}
        getMoves={getMoves}
        makeMove={makeMove}
      />
      <InputMove makeMove={makeMove} />
      {showGameOverWindow && <GameOver />}
    </div>
  );
}

export default GameWindow;
