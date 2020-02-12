import React, { useState, useEffect } from "react";
import ChessBoard from "./ChessBoard";
import InputMove from "../components/InputMove";
import { getBoard, getTurnNumber } from "../api/getRequests";
import chess from "../index";

function GameWindow(props) {
  const [boardPosition, setBoardPosition] = useState(
    getBoard(setBoardPosition)
  );
  const [hiddenPiece, setHiddenPiece] = useState(null);
  const [showGameOverWindow, setShowGameOverWindow] = useState(false);

  const makeMove = async move => {
    const response = await fetch("/api/move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: move })
    });
    const thisMove = response;
    if (thisMove) {
      setBoardPosition(getBoard());
      if (getTurnNumber() % 3 === 2) {
        setHiddenPiece({
          toSquare: thisMove.to,
          fromSquare: thisMove.from,
          color: thisMove.color,
          piece: thisMove.piece
        });
      } else if (getTurnNumber() % 3 === 0) {
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
