import React from "react";
import { Image } from "react-bootstrap";

function Square(props) {
  const styles =
    props.color === "light"
      ? { backgroundColor: "#e4e8f7" }
      : { backgroundColor: "#a2a6b3" };

  const pieceClass = "piece center " + props.piece;

  return (
    <div className="square" style={styles}>
      <Image className={pieceClass} />
      <p className="letter-label">{props.letterLabel}</p>
    </div>
  );
}

export default Square;
