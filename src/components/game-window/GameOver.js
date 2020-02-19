import React from "react";
import { Button, Card } from "react-bootstrap";

function GameOver(props) {
  return (
    <div className="center">
      <Card
        className="center"
        style={{ width: 300, position: "absolute", top: "25%", opacity: 0.9 }}
      >
        <Card.Body>
          <Card.Title>Game Over</Card.Title>
          <Card.Text>Play again!</Card.Text>
          <Button
            className="center"
            variant="outline-secondary"
            onClick={props.newGame}
          >
            New Game
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GameOver;
