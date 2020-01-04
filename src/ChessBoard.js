import React from "react";
import Square from "./Square";
import { Table } from "react-bootstrap";

function ChessBoard(props) {
  if (props.perspective === "white") {
    return (
      <Table style={{ margin: 0, padding: 0 }}>
        <tr>
          <td>
            <Square color="dark" piece={props.position[7][0]} />
          </td>
          <td>
            <Square color="light" piece={props.position[7][1]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[7][2]} />
          </td>
          <td>
            <Square color="light" piece={props.position[7][3]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[7][4]} />
          </td>
          <td>
            <Square color="light" piece={props.position[7][5]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[7][6]} />
          </td>
          <td>
            <Square color="light" piece={props.position[7][7]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="light" piece={props.position[6][0]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[6][1]} />
          </td>
          <td>
            <Square color="light" piece={props.position[6][2]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[6][3]} />
          </td>
          <td>
            <Square color="light" piece={props.position[6][4]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[6][5]} />
          </td>
          <td>
            <Square color="light" piece={props.position[6][6]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[6][7]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="dark" piece={props.position[5][0]} />
          </td>
          <td>
            <Square color="light" piece={props.position[5][1]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[5][2]} />
          </td>
          <td>
            <Square color="light" piece={props.position[5][3]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[5][4]} />
          </td>
          <td>
            <Square color="light" piece={props.position[5][5]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[5][6]} />
          </td>
          <td>
            <Square color="light" piece={props.position[5][7]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="light" piece={props.position[4][0]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[4][1]} />
          </td>
          <td>
            <Square color="light" piece={props.position[4][2]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[4][3]} />
          </td>
          <td>
            <Square color="light" piece={props.position[4][4]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[4][5]} />
          </td>
          <td>
            <Square color="light" piece={props.position[4][6]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[4][7]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="dark" piece={props.position[3][0]} />
          </td>
          <td>
            <Square color="light" piece={props.position[3][1]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[3][2]} />
          </td>
          <td>
            <Square color="light" piece={props.position[3][3]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[3][4]} />
          </td>
          <td>
            <Square color="light" piece={props.position[3][5]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[3][6]} />
          </td>
          <td>
            <Square color="light" piece={props.position[3][7]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="light" piece={props.position[2][0]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[2][1]} />
          </td>
          <td>
            <Square color="light" piece={props.position[2][2]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[2][3]} />
          </td>
          <td>
            <Square color="light" piece={props.position[2][4]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[2][5]} />
          </td>
          <td>
            <Square color="light" piece={props.position[2][6]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[2][7]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="dark" piece={props.position[1][0]} />
          </td>
          <td>
            <Square color="light" piece={props.position[1][1]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[1][2]} />
          </td>
          <td>
            <Square color="light" piece={props.position[1][3]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[1][4]} />
          </td>
          <td>
            <Square color="light" piece={props.position[1][5]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[1][6]} />
          </td>
          <td>
            <Square color="light" piece={props.position[1][7]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="light" piece={props.position[0][0]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[0][1]} />
          </td>
          <td>
            <Square color="light" piece={props.position[0][2]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[0][3]} />
          </td>
          <td>
            <Square color="light" piece={props.position[0][4]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[0][5]} />
          </td>
          <td>
            <Square color="light" piece={props.position[0][6]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[0][7]} />
          </td>
        </tr>
      </Table>
    );
  } else {
    return (
      <Table>
        <tr>
          <td>
            <Square color="dark" piece={props.position[0][7]} />
          </td>
          <td>
            <Square color="light" piece={props.position[0][6]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[0][5]} />
          </td>
          <td>
            <Square color="light" piece={props.position[0][4]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[0][3]} />
          </td>
          <td>
            <Square color="light" piece={props.position[0][2]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[0][1]} />
          </td>
          <td>
            <Square color="light" piece={props.position[0][0]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="light" piece={props.position[1][7]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[1][6]} />
          </td>
          <td>
            <Square color="light" piece={props.position[1][5]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[1][4]} />
          </td>
          <td>
            <Square color="light" piece={props.position[1][3]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[1][2]} />
          </td>
          <td>
            <Square color="light" piece={props.position[1][1]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[1][0]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="dark" piece={props.position[2][7]} />
          </td>
          <td>
            <Square color="light" piece={props.position[2][6]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[2][5]} />
          </td>
          <td>
            <Square color="light" piece={props.position[2][4]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[2][3]} />
          </td>
          <td>
            <Square color="light" piece={props.position[2][2]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[2][1]} />
          </td>
          <td>
            <Square color="light" piece={props.position[2][0]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="light" piece={props.position[3][7]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[3][6]} />
          </td>
          <td>
            <Square color="light" piece={props.position[3][5]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[3][4]} />
          </td>
          <td>
            <Square color="light" piece={props.position[3][3]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[3][2]} />
          </td>
          <td>
            <Square color="light" piece={props.position[3][1]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[3][0]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="dark" piece={props.position[4][7]} />
          </td>
          <td>
            <Square color="light" piece={props.position[4][6]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[4][5]} />
          </td>
          <td>
            <Square color="light" piece={props.position[4][4]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[4][3]} />
          </td>
          <td>
            <Square color="light" piece={props.position[4][2]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[4][1]} />
          </td>
          <td>
            <Square color="light" piece={props.position[4][0]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="light" piece={props.position[5][7]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[5][6]} />
          </td>
          <td>
            <Square color="light" piece={props.position[5][5]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[5][4]} />
          </td>
          <td>
            <Square color="light" piece={props.position[5][3]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[5][2]} />
          </td>
          <td>
            <Square color="light" piece={props.position[5][1]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[5][0]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="dark" piece={props.position[6][7]} />
          </td>
          <td>
            <Square color="light" piece={props.position[6][6]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[6][5]} />
          </td>
          <td>
            <Square color="light" piece={props.position[6][4]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[6][3]} />
          </td>
          <td>
            <Square color="light" piece={props.position[6][2]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[6][1]} />
          </td>
          <td>
            <Square color="light" piece={props.position[6][0]} />
          </td>
        </tr>
        <tr>
          <td>
            <Square color="light" piece={props.position[7][7]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[7][6]} />
          </td>
          <td>
            <Square color="light" piece={props.position[7][5]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[7][4]} />
          </td>
          <td>
            <Square color="light" piece={props.position[7][3]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[7][2]} />
          </td>
          <td>
            <Square color="light" piece={props.position[7][1]} />
          </td>
          <td>
            <Square color="dark" piece={props.position[7][0]} />
          </td>
        </tr>
      </Table>
    );
  }
}

export default ChessBoard;
