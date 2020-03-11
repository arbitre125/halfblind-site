import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { USER_AUTHENTICATED } from "./redux/store/types";
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
}

const App = () => {
  return (
    <Provider store={store}>
      <div className="primary">
        <div>
          <BrowserRouter>
            <div>
              <Header />
            </div>
            <Switch>
              <Route exact path="/">
                <EntryPage />
              </Route>
              <UserRoute path="/game/:gameId">
                <GamePage size={640} />
              </UserRoute>
              <Route path="/about">
                <AboutPage />
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
          </BrowserRouter>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
