import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserRoute from "./authentication/routing/UserRoute";
import Header from "./components/fixed/Header";
import EntryPage from "./pages/EntryPage";
import GamePage from "./pages/GamePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/fixed/Footer";
import axios from "axios";
import uuid from "uuid";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.hasOwnProperty("usertoken")
  );

  const newGame = async () => {
    const id = uuid().slice(0, 8);
    await axios
      .post(`/game/newgame`, { id })
      .then(res => {
        localStorage.setItem("gameId", id);
      })
      .catch(err => console.log(err));
    return id;
  };

  return (
    <div className="primary">
      <div>
        <BrowserRouter>
          <div>
            <Header setUserLoggedIn={setUserLoggedIn} />
          </div>
          <Switch>
            <Route exact path="/">
              <EntryPage userLoggedIn={userLoggedIn} newGame={newGame} />
            </Route>
            <UserRoute path="/game/:gameId" userLoggedIn={userLoggedIn}>
              <GamePage size={640} />
            </UserRoute>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/login">
              <LoginPage
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
              />
            </Route>
            <Route path="/register">
              <RegisterPage userLoggedIn={userLoggedIn} />
            </Route>
            <Route path="/profile">
              <ProfilePage userLoggedIn={userLoggedIn} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
