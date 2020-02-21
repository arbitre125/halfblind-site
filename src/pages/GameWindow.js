import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import GameInfo from "../components/game/GameInfo";
import ChessBoard from "../containers/ChessBoard";
import MoveHistory from "../components/game/MoveHistory";
import GameOver from "../components/game/GameOver";
import InputMove from "../components/game/InputMove";
import axios from "axios";

function GameWindow(props) {
  const [boardPosition, setBoardPosition] = useState(
    Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null))
  );
  const [moveHistory, setMoveHistory] = useState([]);
  const [gameOver, setGameOver] = useState(-1);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    readBoard(123);
    readHistory(123);
    readGameOver(123);
  }, [reload]);

  const readBoard = async id => {
    await axios
      .get(`/game/${id}`)
      .then(response => setBoardPosition(response.data.board))
      .catch(err => console.log(err));
  };

  const readHistory = async id => {
    await axios
      .get(`/game/${id}`)
      .then(response => setMoveHistory(response.data.history))
      .catch(err => console.log(err));
  };

  const readGameOver = async id => {
    await axios
      .get(`/game/${id}`)
      .then(response =>
        // Game on: return -1
        // Game over mate: return 0 for W mate, 1 for B mate
        // Game over draw: return 2 for stale, 3 for insuff, 4 for 3rep
        setGameOver(
          response.data.gameOver
            ? response.data.inCheckmate
              ? response.data.turn === "b"
                ? 0
                : 1
              : response.data.inStalemate
              ? 2
              : response.data.insufficientMaterial
              ? 3
              : 4
            : -1
        )
      )
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

  const makeMove = async move => {
    await updateMove(123, move);
    setReload(!reload);
  };

  return (
    <div style={{ paddingTop: 20, paddingBottom: 100 }}>
      <Row>
        <Col
          style={{
            padding: 5
          }}
        >
          <GameInfo size={props.size} />
          <div
            style={{
              position: "absolute",
              top: props.size / 2 + 100,
              right: 5
            }}
          >
            <Button
              variant="outline-light"
              onClick={async () => {
                await updateNewGame(123);
                setReload(!reload);
              }}
            >
              New game
            </Button>
          </div>
        </Col>
        <Col>
          <ChessBoard
            perspective="white"
            size={props.size}
            position={boardPosition}
          />
        </Col>
        <Col style={{ padding: 5 }}>
          <MoveHistory size={props.size} moveHistory={moveHistory} />
        </Col>
      </Row>
      {gameOver !== -1 && (
        <GameOver
          type={gameOver}
          newGame={async () => {
            await updateNewGame(123);
            setReload(!reload);
          }}
          size={props.size}
        />
      )}
      <div className="center">
        <div style={{ marginTop: 20, marginBottom: 10 }}>
          <InputMove makeMove={makeMove} />
        </div>
      </div>
      <div className="center">
        <p className="center grey-txt txt-xs">
          Input your move in valid PGN format
        </p>
      </div>
    </div>
  );
}

export default GameWindow;