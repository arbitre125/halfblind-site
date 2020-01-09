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

  const backgroundColor =
    props.possibleMove && props.piece !== null && !hiddenPieceHere
      ? props.color === "light"
        ? "#e9bac6"
        : "#b5858f"
      : props.color === "light"
      ? "#e4e8f7"
      : "#a2a6b3";

  const squareStyle = {
    backgroundColor: backgroundColor,
    width: props.size / 8,
    height: props.size / 8,
    margin: -1,
    zIndex: 1
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
          style={{ opacity: 0.5, zIndex: 3 }}
        />
      )}
      {props.possibleMove && (hiddenPieceHere || props.piece === null) && (
        <Image
          className={"piece center vertical-center indicator"}
          style={{ opacity: 0.3, width: "50%", zIndex: 2 }}
        />
      )}
    </div>
  );
}

export default Square;
