import React from "react";
import { Image } from "react-bootstrap";
import whole_logo from "../images/logos/whole-w.png";

const AboutPage = props => {
  return (
    <>
      <Image
        src={whole_logo}
        width="500"
        style={{
          position: "absolute",
          right: -200,
          top: 93,
          opacity: (props.width * 0.1) / 300 - 0.05
        }}
      />
      <div
        className="secondary"
        style={{
          minHeight: 650,
          padding: "10%",
          paddingTop: 40
        }}
      >
        <div style={{ maxWidth: 700 }}>
          <p className="white-txt txt-lg" style={{ paddingBottom: 20 }}>
            About
          </p>
          <p className="grey-txt txt-sm-md">
            Half-blind chess is a free, adless and open-source chess project for
            the <b>half-blind</b> variant.
          </p>
          <p className="grey-txt txt-sm-md">
            Released in early 2020, the project is still in its early stages. If
            you notice any bugs, envision any improvements, or want to
            contribute in any way, feel free to share via the links below.
          </p>
          <p
            className="white-txt txt-lg"
            style={{ paddingTop: 20, paddingBottom: 20 }}
          >
            Contact / Contribute
          </p>
          <p className="grey-link txt-sm-md">
            Email:{" "}
            <a
              className="grey-link txt-sm-md"
              href="mailto:benchaplin@protonmail.ch"
            >
              benchaplin@protonmail.ch
            </a>
          </p>
          <p className="grey-link txt-sm-md">
            Github:{" "}
            <a
              className="grey-link txt-sm-md"
              href="https://github.com/benchaplin/halfblind-site"
            >
              https://github.com/benchaplin/halfblind-site
            </a>
          </p>
        </div>
      </div>
      <div
        className="primary"
        style={{
          minHeight: 400,
          padding: "10%"
        }}
      >
        <p className="white-txt txt-lg" style={{ paddingBottom: 20 }}>
          Change Log
        </p>
        <ul style={{ color: "white" }}>
          <li>
            <p className="grey-txt txt-sm-md">alpha v0.1.0 (02.21.20):</p>
            <ul>
              <li>
                <p className="grey-txt txt-sm">Initial release.</p>
              </li>
              <li>
                <p className="grey-txt txt-sm">
                  <b>Added:</b> Offline mode (move by form input), account
                  creation, basic layout.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutPage;
