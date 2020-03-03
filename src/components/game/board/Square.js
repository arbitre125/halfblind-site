import React from "react";
import { Image } from "react-bootstrap";
import wb from "../../../images/pieces/white_bishop.png";
import wk from "../../../images/pieces/white_king.png";
import wn from "../../../images/pieces/white_knight.png";
import wp from "../../../images/pieces/white_pawn.png";
import wq from "../../../images/pieces/white_queen.png";
import wr from "../../../images/pieces/white_rook.png";
import bb from "../../../images/pieces/black_bishop.png";
import bk from "../../../images/pieces/black_king.png";
import bn from "../../../images/pieces/black_knight.png";
import bp from "../../../images/pieces/black_pawn.png";
import bq from "../../../images/pieces/black_queen.png";
import br from "../../../images/pieces/black_rook.png";
// import ind from "../../../images/indicator.png";

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

const Square = props => {
  const backgroundColor =
    props.inCheck && props.piece !== null && props.piece.type === "k"
      ? props.color === "light"
        ? "#e9bac6" // check
        : "#b5858f"
      : props.lastMove.from === props.name || props.lastMove.to === props.name
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
      {props.piece !== null && (
        <Image
          className="piece center"
          src={imageMap.get(props.piece.color + props.piece.type)}
        />
      )}
    </div>
  );
};

export default Square;
