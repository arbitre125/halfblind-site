import React, { useState, useEffect } from "react";
import ChessBoard from "./ChessBoard";
import InputMove from "../components/InputMove";
import GameOver from "../components/GameOver";
// import { readBoard, readGameOver, readTurnNumber, updateMove } from "../api";
import axios from "axios";
import chess from "../index";

function GameWindow(props) {
  const [boardPosition, setBoardPosition] = useState(
    Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null))
  );
  const [hiddenPiece, setHiddenPiece] = useState(null);
  const [showGameOverWindow, setShowGameOverWindow] = useState(false);

  const id = 123;

  useEffect(() => {
    axios
      .get(`/game/${id}`)
      .then(response => setBoardPosition(response.data.board))
      .catch(err => console.log(err));
    axios
      .get(`/game/${id}`)
      .then(response => setShowGameOverWindow(response.data.gameOver))
      .catch(err => console.log(err));
  }, []);

  const makeMove = async move => {
    const thisMove = axios
      .post(`/game/${id}/move`, { move })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    if (thisMove !== null) {
      const turnNumber = 1;
      if (turnNumber % 3 === 2) {
        setHiddenPiece({
          toSquare: thisMove.to,
          fromSquare: thisMove.from,
          color: thisMove.color,
          type: thisMove.piece
        });
      } else if (turnNumber % 3 === 0) {
        setHiddenPiece(null);
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
      ></ChessBoard>
      <div className="center">
        <div style={{ margin: 20 }}>
          <InputMove makeMove={makeMove} />
        </div>
      </div>
      {showGameOverWindow && (
        <GameOver
          newGame={() => {
            setShowGameOverWindow(false);
          }}
        />
      )}
    </div>
  );
}

export default GameWindow;
