import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

const Chess = require("./api/chess");
const chess = new Chess();

export default chess;

ReactDOM.render(<App />, document.getElementById("root"));
