import React from "react";
import { Button, Card } from "react-bootstrap";

function GameOver(props) {
  return (
    <Card
      className="center"
      style={{ width: "25%", position: "relative", top: "25%", zIndex: 2 }}
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
  );
}

export default GameOver;
