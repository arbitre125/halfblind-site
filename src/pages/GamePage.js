import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchHalfBlindAction,
  fetchBoardAction,
  // fetchMovesAction,
  fetchTurnNumberAction,
  fetchInCheckAction,
  fetchGameOverAction,
  fetchHistoryAction,
  makeMoveAction,
  resetGameAction
} from "../redux/store/actions/gameActions";
import { Row, Col, Button } from "react-bootstrap";
import GameInfo from "../components/game/GameInfo";
import ChessBoard from "../components/game/board/ChessBoard";
import MoveHistory from "../components/game/MoveHistory";
import GameOver from "../components/game/GameOver";
import InputMove from "../components/game/InputMove";

const GamePage = ({
  board,
  gameOver,
  fetchHalfBlind,
  fetchBoard,
  // fetchMoves,
  fetchTurnNumber,
  fetchInCheck,
  fetchGameOver,
  fetchHistory,
  makeMove,
  resetGame,
  ...props
}) => {
  let { gameId } = useParams();

  // Board size
  const size = props.width > 1120 ? 560 : props.width > 1050 ? 480 : 400;

  useEffect(() => {
    fetchHalfBlind(gameId);
    fetchBoard(gameId);
    // fetchMoves(gameId); // PLAN: fetched each move
    fetchTurnNumber(gameId);
    fetchInCheck(gameId); // Fetched each move
    fetchGameOver(gameId); // Fetched each move
    fetchHistory(gameId);
  }, [
    gameId,
    fetchHalfBlind,
    fetchBoard,
    // fetchMoves,
    fetchTurnNumber,
    fetchInCheck,
    fetchGameOver,
    fetchHistory
  ]);

  return (
    <div
      style={{
        height: "100vh",
        paddingTop: 20,
        paddingBottom: 100,
        overflowX: "hidden"
      }}
    >
      {props.width > 960 ? (
        <Row style={{ display: "flex" }}>
          <Col
            style={{
              padding: 5
            }}
          >
            <div style={{ position: "relative", top: size / 2 - 160 / 2 }}>
              <GameInfo size={size} />
            </div>
            <div
              style={{
                position: "absolute",
                top: size / 2 + 100,
                right: 5
              }}
            >
              <Button variant="outline-light" onClick={() => resetGame(gameId)}>
                New game
              </Button>
            </div>
          </Col>
          <Col>
            <ChessBoard perspective="white" size={size} />
          </Col>
          <Col style={{ padding: 5 }}>
            <MoveHistory size={size} />
          </Col>
        </Row>
      ) : (
        <>
          <Row
            style={{
              padding: 5
            }}
          >
            <Col>
              <GameInfo size={size} />
            </Col>
            <Col>
              <MoveHistory size={size} />
            </Col>
          </Row>
          <Row className="center" style={{ paddingTop: 20 }}>
            <ChessBoard perspective="white" size={size} />
          </Row>
        </>
      )}
      <div className="center">
        <div style={{ position: "relative", marginTop: 20, marginBottom: 10 }}>
          <InputMove makeMove={makeMove} id={gameId} />
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
          resetGame={() => resetGame(gameId)}
          size={size}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    board: state.game.board,
    gameOver: state.game.gameOver
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHalfBlind: id => {
      dispatch(fetchHalfBlindAction(id));
    },
    fetchBoard: id => {
      dispatch(fetchBoardAction(id));
    },
    // fetchMoves: id => {
    //   dispatch(fetchMovesAction(id));
    // },
    fetchTurnNumber: id => {
      dispatch(fetchTurnNumberAction(id));
    },
    fetchInCheck: id => {
      dispatch(fetchInCheckAction(id));
    },
    fetchGameOver: id => {
      dispatch(fetchGameOverAction(id));
    },
    fetchHistory: id => {
      dispatch(fetchHistoryAction(id));
    },
    makeMove: (id, move) => {
      dispatch(makeMoveAction(id, move));
    },
    resetGame: id => {
      dispatch(resetGameAction(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
