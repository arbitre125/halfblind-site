import React, { useState, useEffect } from "react";
import ChessBoard from "./ChessBoard";
import InputMove from "../components/InputMove";
import GameOver from "../components/GameOver";
import axios from "axios";

function GameWindow(props) {
  const [boardPosition, setBoardPosition] = useState(
    Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null))
  );

  const id = 123;

  const readBoard = async () => {
    await axios
      .get(`/game/${id}`)
      .then(response => setBoardPosition(response.data.board))
      .catch(err => console.log(err));
  };

  const updateMove = async (id, move) => {
    return await axios
      .post(`/game/${id}/move`, { move })
      .then(res => res)
      .catch(err => console.log(err));
  };

  useEffect(() => {
    readBoard();
  }, []);

  const makeMove = move => {
    const thisMove = updateMove(id, move);
    if (thisMove.data !== "") {
      readPossibleMoves();
      setReload(!reload);
    }
  };

  return (
    <div>
      <ChessBoard
        perspective="white"
        size={props.size}
        position={boardPosition}
      />
      <div className="center">
        <div style={{ margin: 20 }}>
          <InputMove makeMove={makeMove} />
        </div>
      </div>
      {showGameOverWindow && <GameOver />}
    </div>
  );
}

export default GameWindow;
