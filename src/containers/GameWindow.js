import React, { useState, useEffect } from "react";
import ChessBoard from "./ChessBoard";
import InputMove from "../components/InputMove";
import chess from "../index";

function GameWindow(props) {
  const [boardPosition, setBoardPosition] = useState(chess.board());
  const [hiddenPiece, setHiddenPiece] = useState(null);
  const [showGameOverWindow, setShowGameOverWindow] = useState(false);

  const makeMove = move => {
    const thisMove = chess.move(move);
    if (thisMove !== null) {
      setBoardPosition(chess.board());
      if (chess.turn_number() % 3 === 2) {
        setHiddenPiece({
          toSquare: thisMove.to,
          fromSquare: thisMove.from,
          color: thisMove.color,
          type: thisMove.piece
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
    return chess.moves({ square: square, verbose: true });
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
      <div className="center">
        <div style={{ margin: 20 }}>
          <InputMove makeMove={makeMove} />
        </div>
      </div>
    </div>
  );
}

export default GameWindow;
