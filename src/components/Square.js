import React from "react";
import { Image } from "react-bootstrap";

function Square(props) {
  // Half-blind functionality
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
    height: props.size / 8
  };

  return (
    <div style={squareStyle} onClick={() => props.onClick(props.name)}>
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
      {props.possibleMove && (
        <Image
          className={"piece center vertical-center indicator"}
          style={{ opacity: 0.5, width: "50%" }}
        />
      )}
    </div>
  );
}

export default Square;
