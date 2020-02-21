import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./containers/fixed/Header";
import EntryPage from "./pages/EntryPage";
import GameWindow from "./pages/GameWindow";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./containers/fixed/Footer";

function App() {
  return (
    <div className="primary">
      <div>
        <Header />
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
              path="/game"
              render={history => (
                <GameWindow size={640} {...history} isAuthed={true} />
              )}
            />
            <Route
              path="/about"
              render={history => <AboutPage {...history} isAuthed={true} />}
            />
            <Route
              path="/login"
              render={history => <LoginPage {...history} isAuthed={true} />}
            />
            <Route
              path="/register"
              render={history => <RegisterPage {...history} isAuthed={true} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
