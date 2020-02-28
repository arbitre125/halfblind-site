import React from "react";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ children, userAuthenticated, ...props }) => {
  return (
    <Route
      {...props}
      render={({ location }) =>
        userAuthenticated ? (
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
