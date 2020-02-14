import React, { useState, useEffect } from "react";
import ChessBoard from "./ChessBoard";
import InputMove from "../components/InputMove";
import GameOver from "../components/GameOver";
import axios from "axios";

function GameWindow(props) {
  const [boardPosition, setBoardPosition] = useState(
    Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null))
  );
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [inCheck, setInCheck] = useState(false);
  const [hiddenPiece, setHiddenPiece] = useState(null);
  const [showGameOverWindow, setShowGameOverWindow] = useState(false);
  const [reload, setReload] = useState(true);

  const id = 123;

  const readBoard = async () => {
    await axios
      .get(`/game/${id}`)
      .then(response => setBoardPosition(response.data.board))
      .catch(err => console.log(err));
  };

  const readPossibleMoves = async () => {
    await axios
      .get(`/game/${id}`)
      .then(response => setPossibleMoves(response.data.moves))
      .catch(err => console.log(err));
  };

  // const readInCheck = async () => {
  //   await axios
  //     .get(`/game/${id}`)
  //     .then(response => setInCheck(response.data.inCheck))
  //     .catch(err => console.log(err));
  // };

  const readGameOver = async () => {
    await axios
      .get(`/game/${id}`)
      .then(response => setShowGameOverWindow(response.data.gameOver))
      .catch(err => console.log(err));
  };

  const readGameOverInfo = async () => {
    return await axios
      .get(`/game/${id}`)
      .then(response => {
        if (response.data.inCheckmate) {
          if (response.data.turn === "w") {
            return 0;
          } else {
            return 1;
          }
        } else if (response.data.inStalemate) {
          return 2;
        } else if (response.data.insufficientMaterial) {
          return 3;
        } else if (response.data.inThreeFoldRepetition) {
          return 4;
        } else {
          return -1;
        }
      })
      .catch(err => console.log(err));
  };

  const updateMove = async (id, move) => {
    return await axios
      .post(`/game/${id}/move`, { move })
      .then(res => res)
      .catch(err => console.log(err));
  };

  const updateNewGame = async id => {
    await axios.post(`/game/${id}/newgame`).catch(err => console.log(err));
  };

  useEffect(() => {
    readBoard();
    readPossibleMoves();
    // readInCheck();
    readGameOver();
  }, [reload, showGameOverWindow]);

  const makeMove = move => {
    const thisMove = updateMove(id, move);
    if (thisMove.data !== "") {
      readPossibleMoves();
      setReload(!reload);
      // Handle half-blind
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

  return (
    <div>
      <ChessBoard
        perspective="white"
        size={props.size}
        position={boardPosition}
        inCheck={false}
        hiddenPiece={hiddenPiece}
        possibleMoves={possibleMoves}
        makeMove={makeMove}
      />
      <div className="center">
        <div style={{ margin: 20 }}>
          <InputMove makeMove={makeMove} />
        </div>
      </div>
      {showGameOverWindow && (
        <GameOver
          newGame={() => {
            updateNewGame(id);
            setShowGameOverWindow(false);
          }}
          info={readGameOverInfo}
        />
      )}
    </div>
  );
}

export default GameWindow;
