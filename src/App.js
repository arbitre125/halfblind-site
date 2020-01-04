import React from "react";
import ChessBoard from "./ChessBoard";
import "./App.css";

function App() {
  const startPosition = [
    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"]
  ];

  return (
    <div className="App">
      <ChessBoard position={startPosition} perspective="white" />
    </div>
  );
}

export default App;
