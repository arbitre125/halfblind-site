import React from "react";
import { connect } from "react-redux";
import { Image } from "react-bootstrap";
import wb from "../../../images/pieces/normal/white_bishop.png";
import wk from "../../../images/pieces/normal/white_king.png";
import wn from "../../../images/pieces/normal/white_knight.png";
import wp from "../../../images/pieces/normal/white_pawn.png";
import wq from "../../../images/pieces/normal/white_queen.png";
import wr from "../../../images/pieces/normal/white_rook.png";
import bb from "../../../images/pieces/normal/black_bishop.png";
import bk from "../../../images/pieces/normal/black_king.png";
import bn from "../../../images/pieces/normal/black_knight.png";
import bp from "../../../images/pieces/normal/black_pawn.png";
import bq from "../../../images/pieces/normal/black_queen.png";
import br from "../../../images/pieces/normal/black_rook.png";

const imageMap = new Map([
  ["wb", wb],
  ["wk", wk],
  ["wn", wn],
  ["wp", wp],
  ["wq", wq],
  ["wr", wr],
  ["bb", bb],
  ["bk", bk],
  ["bn", bn],
  ["bp", bp],
  ["bq", bq],
  ["br", br]
]);

const Square = ({
  halfBlindFetched,
  halfBlind,
  turnNumber,
  inCheck,
  history,
  ...props
}) => {
  const turn = turnNumber % 2 === 0 ? "w" : "b";
  const lastMove = history[history.length - 1];

  const showPiece =
    props.piece !== null &&
    (!halfBlind || halfBlind.to !== props.name) &&
    // Don't show rook for half-blind castle
    !(
      halfBlind &&
      history.length > 0 &&
      ((lastMove.flags === "k" &&
        ((lastMove.color === "w" && props.name === "f1") ||
          (lastMove.color === "b" && props.name === "f8"))) ||
        (lastMove.flags === "q" &&
          ((lastMove.color === "w" && props.name === "d1") ||
            (lastMove.color === "b" && props.name === "d8"))))
    );

  const showHalfBlindPiece = halfBlind && halfBlind.from === props.name;

  // Show half-blind captured piece
  const showCapturedPiece =
    halfBlind && halfBlind.captured && halfBlind.to === props.name;

  // Show rook for half-blind castle
  const showRook =
    halfBlind &&
    history.length > 0 &&
    ((lastMove.flags === "k" &&
      ((lastMove.color === "w" && props.name === "h1") ||
        (lastMove.color === "b" && props.name === "h8"))) ||
      (lastMove.flags === "q" &&
        ((lastMove.color === "w" && props.name === "a1") ||
          (lastMove.color === "b" && props.name === "a8"))));

  const backgroundColor =
    inCheck &&
    props.piece !== null &&
    props.piece.type === "k" &&
    props.piece.color === turn
      ? props.color === "light"
        ? "#e9bac6" // check
        : "#b5858f"
      : history.length > 0 &&
        (lastMove.from === props.name || lastMove.to === props.name) &&
        (!halfBlind || halfBlind.to !== props.name)
      ? props.color === "light"
        ? "#e7dfc1" // lastMove highlight
        : "#c6bf9f"
      : props.color === "light"
      ? "#e4e8f7" // normals
      : "#a2a6b3";

  const squareStyle = {
    backgroundColor: backgroundColor,
    width: props.size / 8,
    height: props.size / 8,
    margin: -1,
    zIndex: 1
  };

  if (!halfBlindFetched) {
    // Prevent half-blind highlight loading too fast
    return (
      <div
        className="no-select"
        style={{
          backgroundColor: props.color === "light" ? "#e4e8f7" : "#a2a6b3",
          width: props.size / 8,
          height: props.size / 8,
          margin: -1,
          zIndex: 1
        }}
      ></div>
    );
  } else {
    return (
      <div className="no-select" style={squareStyle}>
        {showPiece && (
          <Image
            className="piece center"
            src={imageMap.get(props.piece.color + props.piece.type)}
          />
        )}
        {showRook && (
          <Image
            className="piece center"
            src={imageMap.get(lastMove.color + "r")}
          />
        )}
        {showCapturedPiece && (
          <Image
            className="piece center"
            src={imageMap.get(turn + halfBlind.captured)}
          />
        )}
        {showHalfBlindPiece && (
          <Image
            className="piece center"
            style={{ opacity: 0.3 }}
            src={imageMap.get(halfBlind.color + halfBlind.piece)}
          />
        )}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    halfBlindFetched: state.game.halfBlindFetched,
    halfBlind: state.game.halfBlind,
    turnNumber: state.game.turnNumber,
    inCheck: state.game.inCheck,
    history: state.game.history
  };
};

export default connect(mapStateToProps)(Square);
