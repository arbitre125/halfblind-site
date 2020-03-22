import React from "react";

const NotFoundPage = () => {
  return (
    <div
      className="center-horiz secondary"
      style={{
        height: "100vh",
        padding: 60,
        paddingTop: 40
      }}
    >
      <p className="white-txt txt-md-lg">
        Page Not Found <br />
        <a className="grey-link txt-sm-md" href="/">
          Click to return home.
        </a>
      </p>
    </div>
  );
};

export default NotFoundPage;
