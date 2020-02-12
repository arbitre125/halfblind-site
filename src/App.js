import React from "react";
import Nav from "./containers/Nav";
import GameWindow from "./containers/GameWindow";

function App() {
  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <Nav />
      </div>
      <div>
        <GameWindow size={640} />
      </div>
    </>
  );
}

export default App;
