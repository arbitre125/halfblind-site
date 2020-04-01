import React from "react";
import { connect } from "react-redux";
import Square from "./Square";

const ChessBoard = ({ perspectiveWhite, board, ...props }) => {
  if (perspectiveWhite) {
    return (
      <table
        className="center no-padding-no-margin"
        style={{ width: props.size }}
      >
        <tbody>
          <tr>
            <td>
              <Square
                name="a8"
                color="light"
                piece={board[0][0]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b8"
                color="dark"
                piece={board[0][1]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c8"
                color="light"
                piece={board[0][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d8"
                color="dark"
                piece={board[0][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e8"
                color="light"
                piece={board[0][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f8"
                color="dark"
                piece={board[0][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g8"
                color="light"
                piece={board[0][6]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  8
                </p>
                <Square
                  name="h8"
                  color="dark"
                  piece={board[0][7]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="a7"
                color="dark"
                piece={board[1][0]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b7"
                color="light"
                piece={board[1][1]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c7"
                color="dark"
                piece={board[1][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d7"
                color="light"
                piece={board[1][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e7"
                color="dark"
                piece={board[1][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f7"
                color="light"
                piece={board[1][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g7"
                color="dark"
                piece={board[1][6]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  7
                </p>
                <Square
                  name="h7"
                  color="light"
                  piece={board[1][7]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="a6"
                color="light"
                piece={board[2][0]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b6"
                color="dark"
                piece={board[2][1]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c6"
                color="light"
                piece={board[2][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d6"
                color="dark"
                piece={board[2][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e6"
                color="light"
                piece={board[2][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f6"
                color="dark"
                piece={board[2][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g6"
                color="light"
                piece={board[2][6]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  6
                </p>
                <Square
                  name="h6"
                  color="dark"
                  piece={board[2][7]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="a5"
                color="dark"
                piece={board[3][0]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b5"
                color="light"
                piece={board[3][1]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c5"
                color="dark"
                piece={board[3][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d5"
                color="light"
                piece={board[3][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e5"
                color="dark"
                piece={board[3][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f5"
                color="light"
                piece={board[3][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g5"
                color="dark"
                piece={board[3][6]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  5
                </p>
                <Square
                  name="h5"
                  color="light"
                  piece={board[3][7]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="a4"
                color="light"
                piece={board[4][0]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b4"
                color="dark"
                piece={board[4][1]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c4"
                color="light"
                piece={board[4][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d4"
                color="dark"
                piece={board[4][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e4"
                color="light"
                piece={board[4][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f4"
                color="dark"
                piece={board[4][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g4"
                color="light"
                piece={board[4][6]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  4
                </p>
                <Square
                  name="h4"
                  color="dark"
                  piece={board[4][7]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="a3"
                color="dark"
                piece={board[5][0]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b3"
                color="light"
                piece={board[5][1]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c3"
                color="dark"
                piece={board[5][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d3"
                color="light"
                piece={board[5][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e3"
                color="dark"
                piece={board[5][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f3"
                color="light"
                piece={board[5][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g3"
                color="dark"
                piece={board[5][6]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  3
                </p>
                <Square
                  name="h3"
                  color="light"
                  piece={board[5][7]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="a2"
                color="light"
                piece={board[6][0]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b2"
                color="dark"
                piece={board[6][1]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c2"
                color="light"
                piece={board[6][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d2"
                color="dark"
                piece={board[6][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e2"
                color="light"
                piece={board[6][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f2"
                color="dark"
                piece={board[6][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g2"
                color="light"
                piece={board[6][6]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  2
                </p>
                <Square
                  name="h2"
                  color="dark"
                  piece={board[6][7]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  a
                </p>
                <Square
                  name="a1"
                  color="dark"
                  piece={board[7][0]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  b
                </p>
                <Square
                  name="b1"
                  color="light"
                  piece={board[7][1]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  c
                </p>
                <Square
                  name="c1"
                  color="dark"
                  piece={board[7][2]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  d
                </p>
                <Square
                  name="d1"
                  color="light"
                  piece={board[7][3]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  e
                </p>
                <Square
                  name="e1"
                  color="dark"
                  piece={board[7][4]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  f
                </p>
                <Square
                  name="f1"
                  color="light"
                  piece={board[7][5]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  g
                </p>
                <Square
                  name="g1"
                  color="dark"
                  piece={board[7][6]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  h
                </p>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  1
                </p>
                <Square
                  name="h1"
                  color="light"
                  piece={board[7][7]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <table className="center">
        <tbody>
          <tr>
            <td>
              <Square
                name="h1"
                color="light"
                piece={board[7][7]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g1"
                color="dark"
                piece={board[7][6]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f1"
                color="light"
                piece={board[7][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e1"
                color="dark"
                piece={board[7][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d1"
                color="light"
                piece={board[7][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c1"
                color="dark"
                piece={board[7][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b1"
                color="light"
                piece={board[7][1]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  1
                </p>
                <Square
                  name="a1"
                  color="dark"
                  piece={board[7][0]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="h2"
                color="dark"
                piece={board[6][7]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g2"
                color="light"
                piece={board[6][6]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f2"
                color="dark"
                piece={board[6][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e2"
                color="light"
                piece={board[6][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d2"
                color="dark"
                piece={board[6][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c2"
                color="light"
                piece={board[6][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b2"
                color="dark"
                piece={board[6][1]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  2
                </p>
                <Square
                  name="a2"
                  color="light"
                  piece={board[6][0]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="h3"
                color="light"
                piece={board[5][7]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g3"
                color="dark"
                piece={board[5][6]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f3"
                color="light"
                piece={board[5][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e3"
                color="dark"
                piece={board[5][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d3"
                color="light"
                piece={board[5][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c3"
                color="dark"
                piece={board[5][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b3"
                color="light"
                piece={board[5][1]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  3
                </p>
                <Square
                  name="a3"
                  color="dark"
                  piece={board[5][0]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="h4"
                color="dark"
                piece={board[4][7]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g4"
                color="light"
                piece={board[4][6]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f4"
                color="dark"
                piece={board[4][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e4"
                color="light"
                piece={board[4][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d4"
                color="dark"
                piece={board[4][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c4"
                color="light"
                piece={board[4][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b4"
                color="dark"
                piece={board[4][1]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  4
                </p>
                <Square
                  name="a4"
                  color="light"
                  piece={board[4][0]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="h5"
                color="light"
                piece={board[3][7]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g5"
                color="dark"
                piece={board[3][6]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f5"
                color="light"
                piece={board[3][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e5"
                color="dark"
                piece={board[3][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d5"
                color="light"
                piece={board[3][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c5"
                color="dark"
                piece={board[3][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b5"
                color="light"
                piece={board[3][1]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  5
                </p>
                <Square
                  name="a5"
                  color="dark"
                  piece={board[3][0]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="h6"
                color="dark"
                piece={board[2][7]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g6"
                color="light"
                piece={board[2][6]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f6"
                color="dark"
                piece={board[2][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e6"
                color="light"
                piece={board[2][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d6"
                color="dark"
                piece={board[2][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c6"
                color="light"
                piece={board[2][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b6"
                color="dark"
                piece={board[2][1]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  6
                </p>
                <Square
                  name="a6"
                  color="light"
                  piece={board[2][0]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Square
                name="h7"
                color="light"
                piece={board[1][7]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="g7"
                color="dark"
                piece={board[1][6]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="f7"
                color="light"
                piece={board[1][5]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="e7"
                color="dark"
                piece={board[1][4]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="d7"
                color="light"
                piece={board[1][3]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="c7"
                color="dark"
                piece={board[1][2]}
                size={props.size}
              />
            </td>
            <td>
              <Square
                name="b7"
                color="light"
                piece={board[1][1]}
                size={props.size}
              />
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  7
                </p>
                <Square
                  name="a7"
                  color="dark"
                  piece={board[1][0]}
                  size={props.size}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  h
                </p>
                <Square
                  name="h8"
                  color="dark"
                  piece={board[0][7]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  g
                </p>
                <Square
                  name="g8"
                  color="light"
                  piece={board[0][6]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  f
                </p>
                <Square
                  name="f8"
                  color="dark"
                  piece={board[0][5]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  e
                </p>
                <Square
                  name="e8"
                  color="light"
                  piece={board[0][4]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  d
                </p>
                <Square
                  name="d8"
                  color="dark"
                  piece={board[0][3]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  c
                </p>
                <Square
                  name="c8"
                  color="light"
                  piece={board[0][2]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="white-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    bottom: -18,
                    left: 1
                  }}
                >
                  b
                </p>
                <Square
                  name="b8"
                  color="dark"
                  piece={board[0][1]}
                  size={props.size}
                />
              </div>
            </td>
            <td>
              <div style={{ position: "relative" }}>
                <p
                  className="dark-grey-txt txt-xs no-select"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    right: 1
                  }}
                >
                  8
                </p>
                <div style={{ position: "relative" }}>
                  <p
                    className="dark-grey-txt txt-xs no-select"
                    style={{
                      zIndex: 2,
                      position: "absolute",
                      bottom: -18,
                      left: 1
                    }}
                  >
                    a
                  </p>
                  <Square
                    name="a8"
                    color="light"
                    piece={board[0][0]}
                    size={props.size}
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
};

const mapStateToProps = state => {
  return {
    perspectiveWhite: state.game.perspectiveWhite,
    board: state.game.board
  };
};

export default connect(mapStateToProps)(ChessBoard);
