import React from "react";
import decode from "jwt-decode";

const ProfilePage = props => {
  if (!props.isAuthed) {
    console.log("push ahead");
    props.history.push("/login");
  }

  return (
    <div
      className="center-horiz secondary"
      style={{
        height: "100vh",
        padding: 60,
        paddingTop: 20
      }}
    >
      <p className="grey-txt txt-md">
        Welcome {decode(localStorage.usertoken).username}
      </p>
    </div>
  );
};

export default ProfilePage;
