import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const NonUserRoute = ({ children, userLogged, ...props }) => {
  return (
    <Route
      {...props}
      render={({ location }) =>
        !userLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location } // For back after redirect
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    userLogged: state.user.userLogged
  };
};

export default connect(mapStateToProps)(NonUserRoute);
