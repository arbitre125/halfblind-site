import React from "react";
import { Image } from "react-bootstrap";

function Square(props) {
  let backgroundColor = "";
  switch (props.color) {
    case "light":
      backgroundColor = "#e4e8f7";
      break;
    case "dark":
      backgroundColor = "#a2a6b3";
      break;
    case "red":
      backgroundColor = "red";
      break;
    default:
      backgroundColor = "#e4e8f7";
  }

  const styles = {
    backgroundColor: backgroundColor,
    width: props.size / 8,
    height: props.size / 8,
    margin: -1
  };

  return (
    <div style={styles}>
      {props.piece !== null && (
        <Image
          className={"piece center " + props.piece.color + props.piece.type}
        />
      )}
    </div>
  );
}

export default Square;
