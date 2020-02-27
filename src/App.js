import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./containers/fixed/Header";
import EntryPage from "./pages/EntryPage";
import GameWindow from "./pages/GameWindow";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./containers/fixed/Footer";
import axios from "axios";
import uuid from "uuid";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.hasOwnProperty("usertoken")
  );

  const newGame = async () => {
    const id = uuid().slice(0, 7);
    await axios
      .post(`/game/newgame`, { id })
      .then(res => {
        localStorage.setItem("gameId", id);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="primary">
      <div>
        <BrowserRouter>
          <div>
            <Header setUserLoggedIn={setUserLoggedIn} />
          </div>
          <Switch>
            <Route
              exact
              path="/"
              render={history => <EntryPage {...history} newGame={newGame} />}
            />
            <Route
              path="/game/:gameId"
              render={history => (
                <GameWindow {...history} size={640} newGame={newGame} />
              )}
            />
            <Route
              path="/about"
              render={history => <AboutPage {...history} />}
            />
            <Route
              path="/login"
              render={history => (
                <LoginPage
                  {...history}
                  userLoggedIn={userLoggedIn}
                  setUserLoggedIn={setUserLoggedIn}
                />
              )}
            />
            <Route
              path="/register"
              render={history => (
                <RegisterPage {...history} userLoggedIn={userLoggedIn} />
              )}
            />
            <Route
              path="/profile"
              render={history => (
                <ProfilePage {...history} userLoggedIn={userLoggedIn} />
              )}
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
