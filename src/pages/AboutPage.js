import React from "react";
import { Image } from "react-bootstrap";
import whole_logo from "../images/logos/whole-w.png";

const AboutPage = () => {
  return (
    <>
      <Image
        src={whole_logo}
        width="500"
        style={{ position: "absolute", right: -200, top: "10%", opacity: 0.5 }}
      />
      <div
        className="secondary"
        style={{
          minHeight: 650,
          padding: 80,
          paddingTop: 40,
          paddingRight: 320
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <p className="white-txt txt-lg" style={{ paddingBottom: 20 }}>
            About
          </p>
          <p className="grey-txt txt-sm">
            Half-blind chess is a free, adless and open-source chess project for
            the <b>half-blind</b> variant.
          </p>
          <p className="grey-txt txt-sm">
            Released in early 2020, the project is still in its early stages. If
            you notice any bugs, imagine any improvements, or want to contribute
            in any way, see the contact links below.
          </p>
          <p
            className="white-txt txt-lg"
            style={{ paddingTop: 20, paddingBottom: 20 }}
          >
            Contact / Contribute
          </p>
          <p className="grey-link txt-sm">
            Email:{" "}
            <a
              className="grey-link txt-sm"
              href="mailto:benchaplin@protonmail.ch"
            >
              benchaplin@protonmail.ch
            </a>
          </p>
          <p className="grey-link txt-sm">
            Github:{" "}
            <a
              className="grey-link txt-sm"
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
          padding: 80
        }}
      >
        <p className="white-txt txt-lg" style={{ paddingBottom: 20 }}>
          Change Log
        </p>
        <ul style={{ color: "white" }}>
          <li>
            <p className="grey-txt txt-sm">alpha v0.1.0 (02.20.20):</p>
            <ul>
              <li>
                <p className="grey-txt txt-sm">Initial release.</p>
              </li>
              <li>
                <p className="grey-txt txt-sm">
                  <b>Added:</b> Offline mode, account creation, basic layout.
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
