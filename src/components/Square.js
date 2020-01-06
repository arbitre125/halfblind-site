import React from "react";
import { Image } from "react-bootstrap";

function Square(props) {
  const hiddenPieceHere =
    props.hiddenPiece === null || props.piece === null
      ? false
      : props.name === props.hiddenPiece.toSquare;

  const hiddenPieceWasHere =
    props.hiddenPiece === null
      ? false
      : props.name === props.hiddenPiece.fromSquare;

  const backgroundColor = props.color === "light" ? "#e4e8f7" : "#a2a6b3";

  const squareStyle = {
    backgroundColor: backgroundColor,
    width: props.size / 8,
    height: props.size / 8,
    margin: -1
  };

  return (
    <div style={squareStyle}>
      {props.piece !== null && !hiddenPieceHere && (
        <Image
          className={"piece center " + props.piece.color + props.piece.type}
        />
      )}
      {hiddenPieceWasHere && (
        <Image
          className={
            "piece center " + props.hiddenPiece.color + props.hiddenPiece.piece
          }
          style={{ opacity: 0.5 }}
        />
      )}
    </div>
  );
}

export default Square;
