import React from "react";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ children, userLoggedIn, ...props }) => {
  return (
    <Route
      {...props}
      render={({ location }) =>
        userLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location } // For back after redirect
            }}
          />
        )
      }
    />
  );
};

export default UserRoute;
