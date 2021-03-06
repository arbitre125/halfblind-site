import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
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
  resetGameAction,
  setAutoFlipPerspective
} from "../redux/store/actions/gameActions";
import { Row, Col, Button } from "react-bootstrap";
import Switch from "react-switch";
import GameInfo from "../components/game/GameInfo";
import ChessBoard from "../components/game/board/ChessBoard";
import MoveHistory from "../components/game/MoveHistory";
import GameOver from "../components/game/GameOver";
import InputMove from "../components/game/InputMove";

const GamePage = ({
  userDetails,
  autoFlipPerspective,
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
  setAutoFlipPerspective,
  ...props
}) => {
  let gameId = userDetails.username;

  // Board size
  const size = props.width > 1200 ? 560 : props.width > 540 ? 480 : 400;

  useEffect(() => {
    fetchHalfBlind(gameId);
    fetchBoard(gameId);
    // fetchMoves(gameId); // PLAN: Fetched each move
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
      className="primary"
      style={{
        height: "100vh",
        paddingTop: 20,
        paddingBottom: 100,
        overflowX: "hidden"
      }}
    >
      {props.width > 1000 ? (
        <>
          <Row style={{ display: "flex" }}>
            <Col
              style={{
                padding: 5
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: size / 2 - 115,
                  right: 5
                }}
              >
                <label className="white-txt txt-sm">
                  <span style={{ position: "relative", top: -8 }}>
                    Auto-flip board? &nbsp;
                  </span>
                  <Switch
                    checked={autoFlipPerspective}
                    onChange={() =>
                      setAutoFlipPerspective(!autoFlipPerspective)
                    }
                    onColor="#84BC84"
                    activeBoxShadow="none"
                  />
                </label>
              </div>
              <div style={{ position: "relative", top: size / 2 - 160 / 2 }}>
                <GameInfo />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: size / 2 + 100,
                  right: 5
                }}
              >
                <Button
                  variant="outline-light"
                  onClick={() => resetGame(gameId)}
                >
                  New game
                </Button>
              </div>
            </Col>
            <Col>
              <ChessBoard perspective="white" size={size} />
            </Col>
            <Col style={{ padding: 5 }}>
              <MoveHistory size={size} maxHeight={size / 2} />
            </Col>
          </Row>
          <div className="center">
            <div
              style={{ position: "relative", marginTop: 20, marginBottom: 10 }}
            >
              <InputMove makeMove={makeMove} id={gameId} />
            </div>
          </div>
          <div className="center">
            <p className="center grey-txt txt-xs">
              Input your move using&nbsp;
              <a
                className="grey-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://cheatography.com/davechild/cheat-sheets/chess-algebraic-notation/"
              >
                <u>Algebraic Notation</u>
              </a>
            </p>
          </div>
        </>
      ) : (
        // Mobile view
        <>
          <Row
            style={{
              padding: 0
            }}
          >
            <Col style={{ marginLeft: 10, paddingLeft: 0 }}>
              <GameInfo />
            </Col>
            <Col style={{ marginLeft: -20, paddingRight: 0 }}>
              <MoveHistory size={size} maxHeight={160} />
            </Col>
          </Row>
          <Row className="center" style={{ paddingTop: 20 }}>
            <ChessBoard size={size} />
          </Row>
          <div className="center">
            <div
              style={{ position: "relative", marginTop: 20, marginBottom: 10 }}
            >
              <InputMove makeMove={makeMove} id={gameId} />
            </div>
          </div>
          <div className="center">
            <p className="center grey-txt txt-xs">
              Input your move using&nbsp;
              <a
                className="grey-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://cheatography.com/davechild/cheat-sheets/chess-algebraic-notation/"
              >
                <u>Algebraic Notation</u>
              </a>
            </p>
          </div>
          <div className="center">
            <Button
              variant="outline-light"
              style={{ margin: 20 }}
              onClick={() => resetGame(gameId)}
            >
              New game
            </Button>
          </div>
          <div className="center">
            <label className="white-txt txt-sm">
              <span style={{ position: "relative", top: -8 }}>
                Flip board? &nbsp;
              </span>
              <Switch
                checked={autoFlipPerspective}
                onChange={() => setAutoFlipPerspective(!autoFlipPerspective)}
                onColor="#84BC84"
                activeBoxShadow="none"
              />
            </label>
          </div>
        </>
      )}
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
    userDetails: state.user.userDetails,
    autoFlipPerspective: state.game.autoFlipPerspective,
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
    },
    setAutoFlipPerspective: b => {
      dispatch(setAutoFlipPerspective(b));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
