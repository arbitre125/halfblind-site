import React from "react";
import { Image } from "react-bootstrap";

function Square(props) {
  const styles =
    props.color === "light"
      ? { backgroundColor: "#e4e8f7" }
      : { backgroundColor: "#a2a6b3" };

  return (
    <div className="square" style={styles}>
      {props.piece !== null && (
        <Image
          className={"piece center " + props.piece.color + props.piece.type}
        />
      )}
    </div>
  );
}

export default Square;
