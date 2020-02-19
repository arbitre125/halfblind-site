import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavTop from "./containers/fixed/NavTop";
import EntryPage from "./pages/EntryPage";
import GameWindow from "./pages/GameWindow";
import Footer from "./containers/fixed/Footer";

function App() {
  return (
    <div className="main">
      <div>
        <NavTop />
      </div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={history => <EntryPage {...history} isAuthed={true} />}
            />
            <Route
              path="/play"
              render={history => (
                <GameWindow size={640} {...history} isAuthed={true} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
      <div style={{ marginTop: 100 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
