import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="secondary" style={{ padding: 0 }}>
      <Navbar>
        <p className="center grey-txt txt-xs">
          &copy; 2020 Ben Chaplin. All rights reserved.
        </p>
      </Navbar>
    </div>
  );
};

export default Footer;
