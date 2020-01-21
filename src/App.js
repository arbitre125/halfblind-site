import React from "react";
import GameWindow from "./containers/GameWindow";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <GameWindow size={650} />
    </div>
  );
}

export default App;
