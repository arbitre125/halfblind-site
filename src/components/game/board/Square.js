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
import hb_wb from "../../../images/pieces/half-blind/hb_white_bishop.png";
import hb_wk from "../../../images/pieces/half-blind/hb_white_king.png";
import hb_wn from "../../../images/pieces/half-blind/hb_white_knight.png";
import hb_wp from "../../../images/pieces/half-blind/hb_white_pawn.png";
import hb_wq from "../../../images/pieces/half-blind/hb_white_queen.png";
import hb_wr from "../../../images/pieces/half-blind/hb_white_rook.png";
// import hb_bb from "../../../images/pieces/half-blind/hb_black_bishop.png";
// import hb_bk from "../../../images/pieces/half-blind/hb_black_king.png";
// import hb_bn from "../../../images/pieces/half-blind/hb_black_knight.png";
// import hb_bp from "../../../images/pieces/half-blind/hb_black_pawn.png";
// import hb_bq from "../../../images/pieces/half-blind/hb_black_queen.png";
// import hb_br from "../../../images/pieces/half-blind/hb_black_rook.png";
// import hb_ind from "../../../images/indicator.png";

const imageMap = new Map([
  ["wb", wb],
  ["wk", wk],
  ["wn", wn],
  ["wp", wp],
  ["wq", wq],
  ["wr", wr],
  ["hb_wb", hb_wb],
  ["hb_wk", hb_wk],
  ["hb_wn", hb_wn],
  ["hb_wp", hb_wp],
  ["hb_wq", hb_wq],
  ["hb_wr", hb_wr],
  ["bb", bb],
  ["bk", bk],
  ["bn", bn],
  ["bp", bp],
  ["bq", bq],
  ["br", br]
]);

const Square = ({ halfBlind, turnNumber, inCheck, history, ...props }) => {
  const turn = turnNumber % 2 === 0 ? "w" : "b";

  const lastMove = history[history.length - 1];

  const showPiece =
    props.piece !== null &&
    (!halfBlind || halfBlind.to !== props.name) &&
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

  // For half-blind castles
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
      {showHalfBlindPiece && (
        <Image
          className="piece center"
          style={{ opacity: 0.3 }}
          src={imageMap.get(halfBlind.color + halfBlind.piece)}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    halfBlind: state.game.halfBlind,
    turnNumber: state.game.turnNumber,
    inCheck: state.game.inCheck,
    history: state.game.history
  };
};

export default connect(mapStateToProps)(Square);
