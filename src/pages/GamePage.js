import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchHalfBlindAction,
  fetchBoardAction,
  fetchMovesAction,
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
  fetchMoves,
  fetchTurnNumber,
  fetchInCheck,
  fetchGameOver,
  fetchHistory,
  makeMove,
  resetGame,
  ...props
}) => {
  let { gameId } = useParams();

  useEffect(() => {
    fetchHalfBlind(gameId);
    fetchBoard(gameId);
    fetchMoves(gameId);
    fetchTurnNumber(gameId);
    fetchInCheck(gameId);
    fetchGameOver(gameId);
    fetchHistory(gameId);
  }, [
    gameId,
    fetchHalfBlind,
    fetchBoard,
    fetchMoves,
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
            <Button variant="outline-light" onClick={() => resetGame(gameId)}>
              New game
            </Button>
          </div>
        </Col>
        <Col>
          <ChessBoard perspective="white" size={props.size} />
        </Col>
        <Col style={{ padding: 5 }}>
          <MoveHistory size={props.size} />
        </Col>
      </Row>
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
          size={props.size}
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
    fetchMoves: id => {
      dispatch(fetchMovesAction(id));
    },
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
