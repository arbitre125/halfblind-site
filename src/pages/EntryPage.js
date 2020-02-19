import React from "react";
import { Button, Image } from "react-bootstrap";
import whole_logo from "../images/logos/whole-w.png";
import half_eye from "../images/logos/half-eye-r-w.png";

const EntryPage = () => {
  return (
    <>
      <div className="no-padding-no-margin board-bg" style={{ height: "80vh" }}>
        <div style={{ paddingTop: "30vh" }}>
          <div className="center" style={{ padding: 10 }}>
            <p className="center white-txt txt-md">Find an opponent online!</p>
          </div>
          <div className="center">
            <Button className="light-btn" variant="outline-light" href="/play">
              Challenge a friend
            </Button>
          </div>
        </div>
        <Image
          src={whole_logo}
          width="500"
          style={{ position: "absolute", right: -200, top: "5%", opacity: 0.3 }}
        ></Image>
      </div>
      <div
        className="secondary"
        style={{ height: "80vh", paddingLeft: 80, paddingRight: 80 }}
      >
        <p
          className="white-txt txt-lg"
          style={{ paddingTop: 60, paddingBottom: 20 }}
        >
          Rules:
        </p>
        <p className="grey-txt txt-md">
          <ol>
            <li style={{ paddingBottom: 20 }}>
              Every third turn, a player makes a <b>half-blind move</b>.
            </li>
            <li style={{ paddingBottom: 20 }}>
              A <b>half-blind move</b> is a move in which the opposing player
              only sees <i>which</i> piece was moved, not <i>where</i> it was
              moved to.
              <p className="grey-txt txt-sm" style={{ paddingTop: 20 }}>
                <i>
                  (&nbsp;said piece is indicated by the half-blind icon:{" "}
                  <span>
                    <Image
                      src={half_eye}
                      width="20"
                      style={{ marginBottom: 5 }}
                    />
                  </span>{" "}
                  )
                </i>
              </p>
            </li>
            <li style={{ marginTop: -20, paddingBottom: 20 }}>
              The position of the piece remains hidden until the next turn has
              been made.
            </li>
          </ol>
        </p>
      </div>
    </>
  );
};

export default EntryPage;
