import React from "react";
import { Button } from "react-bootstrap";

function GameOver(props) {
  return (
    <div>
      <h4 className="center">Game Over!</h4>
      <Button className="center" variant="outline-secondary" onClick={props.newGame}>
        New Game
      </Button>
    </div>
  );
}

export default GameOver;
