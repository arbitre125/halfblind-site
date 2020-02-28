import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import whole_logo from "../images/logos/whole-w.png";
import half_eye from "../images/logos/half-eye-r-w.png";

const EntryPage = props => {
  let history = useHistory();

  return (
    <>
      <div className="no-padding-no-margin board-bg" style={{ height: 650 }}>
        <Image
          src={whole_logo}
          width="500"
          style={{ position: "absolute", right: -200, top: 27, opacity: 0.5 }}
        />
        <div style={{ paddingTop: 250 }}>
          <div className="center" style={{ padding: 10 }}>
            <p className="center white-txt txt-md">
              Play half-blind chess offline!
            </p>
          </div>
          <div className="center">
            <Button
              variant="outline-light"
              onClick={async () => {
                const id = await props.newGame();
                history.push(`/game/${id}`);
              }}
            >
              Play
            </Button>
          </div>
        </div>
      </div>
      <div
        className="secondary"
        style={{ height: 500, paddingLeft: 80, paddingRight: 80 }}
      >
        <p
          className="white-txt txt-lg"
          style={{ paddingTop: 60, paddingBottom: 20 }}
        >
          Rules:
        </p>
        <ol className="grey-txt txt-sm-md">
          <li style={{ paddingBottom: 20 }}>
            Every third turn, a player makes a <b>half-blind move</b>.
          </li>
          <li style={{ paddingBottom: 20 }}>
            A <b>half-blind move</b> is a move in which the opposing player only
            sees <i>which</i> piece was moved, not <i>where</i> it was moved to.
            <div style={{ height: 10 }}></div>
            <span className="grey-txt txt-sm">
              <i>
                (&nbsp;the piece is indicated by the half-blind icon:{" "}
                <span>
                  <Image
                    src={half_eye}
                    width="20"
                    style={{ marginBottom: 5 }}
                  />
                </span>{" "}
                )
              </i>
            </span>
            <div style={{ height: 10 }}></div>
          </li>
          <li style={{ marginTop: -20, paddingBottom: 20 }}>
            The position of the piece remains hidden until the next turn has
            been made.
          </li>
        </ol>
      </div>
    </>
  );
};

export default EntryPage;
