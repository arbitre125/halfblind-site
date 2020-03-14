import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const GameOver = props => {
  const [show, setShow] = useState(true);

  let info = "";
  switch (props.type) {
    case 0:
      info = "White won by checkmate.";
      break;
    case 1:
      info = "Black won by checkmate.";
      break;
    case 2:
      info = "Draw by stalemate.";
      break;
    case 3:
      info = "Draw by insufficient material.";
      break;
    case 4:
      info = "Draw by threefold repetetition.";
      break;
    default:
      info = "";
  }

  if (show) {
    return (
      <div className="center">
        <Card
          className="center secondary"
          style={{
            width: 300,
            height: 200,
            position: "relative",
            top: -(props.size / 2 + 100 + 87)
          }}
        >
          <Card.Body>
            <Card.Title className="white-txt">Game Over</Card.Title>
            <Card.Text className="grey-txt">{info}</Card.Text>
            <Card.Text className="grey-txt">Play again!</Card.Text>
            <Card.Text
              className="grey-txt text-xs x-hide"
              onClick={() => setShow(false)}
            >
              x
            </Card.Text>
            <Button variant="outline-light" onClick={props.resetGame}>
              New Game
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return null;
  }
};

export default GameOver;
