import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
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
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
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
