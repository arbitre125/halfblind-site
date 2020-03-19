import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  USER_AUTHENTICATED,
  NEW_ONLINE_GAME_FETCHED
} from "./redux/store/types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserRoute from "./authentication/routing/UserRoute";
import NonUserRoute from "./authentication/routing/NonUserRoute";
import Header from "./components/fixed/Header";
import EntryPage from "./pages/EntryPage";
import GamePage from "./pages/GamePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/fixed/Footer";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import decode from "jwt-decode";

// Persist authentication
if (localStorage.usertoken) {
  setAuthorizationToken(localStorage.usertoken);
  store.dispatch({
    type: USER_AUTHENTICATED,
    payload: decode(localStorage.usertoken)
  });
  if (localStorage.currentGameId) {
    store.dispatch({
      type: NEW_ONLINE_GAME_FETCHED,
      payload: localStorage.currentGameId
    });
  }
}

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () =>
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="primary">
          <div>
            <Header width={width} />
          </div>
          <div>
            <Switch>
              <Route exact path="/">
                <EntryPage width={width} />
              </Route>
              <UserRoute path="/game/offline">
                <GamePage width={width} />
              </UserRoute>
              <Route path="/about">
                <AboutPage width={width} />
              </Route>
              <NonUserRoute path="/login">
                <LoginPage />
              </NonUserRoute>
              <NonUserRoute path="/register">
                <RegisterPage />
              </NonUserRoute>
              <UserRoute path="/profile">
                <ProfilePage />
              </UserRoute>
            </Switch>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
