import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import GameInfo from "../components/game-window/GameInfo";
import ChessBoard from "../containers/ChessBoard";
import MoveHistory from "../components/game-window/MoveHistory";
import InputMove from "../components/game-window/InputMove";
import axios from "axios";

function GameWindow(props) {
  const [boardPosition, setBoardPosition] = useState(
    Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null))
  );

  // Reads board on initial render
  useEffect(() => {
    readBoard(123);
  }, []);

  const readBoard = async id => {
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

  const makeMove = move => {
    updateMove(123, move);
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <Row>
        <Col
          style={{
            padding: 5
          }}
        >
          <GameInfo size={props.size} />
        </Col>
        <Col>
          <ChessBoard
            perspective="white"
            size={props.size}
            position={boardPosition}
          />
        </Col>
        <Col style={{ padding: 5 }}>
          <MoveHistory size={props.size} />
        </Col>
      </Row>
      <div className="center">
        <div style={{ margin: 20, marginLeft: 40 }}>
          <InputMove makeMove={makeMove} />
        </div>
      </div>
    </div>
  );
}

export default GameWindow;
