import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import GameInfo from "../components/game/GameInfo";
import ChessBoard from "../components/game/board/ChessBoard";
import MoveHistory from "../components/game/MoveHistory";
import GameOver from "../components/game/GameOver";
import InputMove from "../components/game/InputMove";
import axios from "axios";

const GamePage = props => {
  const [boardPosition, setBoardPosition] = useState(
    Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null))
  );
  const [moveHistory, setMoveHistory] = useState([]);
  const [gameOver, setGameOver] = useState(-1);
  const [reload, setReload] = useState(false);

  let { gameId } = useParams();

  useEffect(() => {
    readBoard(gameId);
    readHistory(gameId);
    readGameOver(gameId);
  }, [reload, gameId]);

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

  const updateReset = async id => {
    await axios
      .post(`/game/${id}/reset`)
      .then(res => res)
      .catch(err => console.log(err));
  };

  const makeMove = async move => {
    await updateMove(gameId, move);
    setReload(!reload);
  };

  const resetGame = async () => {
    await updateReset(gameId);
  };

  return (
    <div
      style={{
        height: "100vh",
        paddingTop: 20,
        paddingBottom: 100,
        overflowX: "hidden"
      }}
    >
      <Row style={{ display: "flex" }}>
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
                await resetGame();
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
      <div className="center">
        <div style={{ position: "relative", marginTop: 20, marginBottom: 10 }}>
          <InputMove makeMove={makeMove} />
        </div>
      </div>
      <div className="center">
        <p className="center grey-txt txt-xs">
          Input your move in valid PGN format
        </p>
      </div>
      {gameOver !== -1 && (
        <GameOver
          type={gameOver}
          newGame={async () => {
            await resetGame();
            setReload(!reload);
          }}
          size={props.size}
        />
      )}
    </div>
  );
};

export default GamePage;
