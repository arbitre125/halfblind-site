import React, { useState } from "react";
import { Image, Card, Button } from "react-bootstrap";
import ex1 from "../images/ex/ex1.png";
import ex2 from "../images/ex/ex2.png";
import ex3 from "../images/ex/ex3.png";
import ex4 from "../images/ex/ex4.png";
import ex5 from "../images/ex/ex5.png";
import ex6 from "../images/ex/ex6.png";
import ex7 from "../images/ex/ex7.png";
import ex8 from "../images/ex/ex8.png";
import eye from "../images/logos/half-eye-r-w.png";

const imageMap = new Map([
  [1, ex1],
  [2, ex2],
  [3, ex3],
  [4, ex4],
  [5, ex5],
  [6, ex6],
  [7, ex7],
  [8, ex8],
  [9, ex6],
  [10, ex6]
]);

const moveMap = new Map([
  [1, <p></p>],
  [2, <p>1. e4</p>],
  [
    3,
    <p>
      1. e4 &emsp; e&thinsp;
      {<Image src={eye} width={15} style={{ marginBottom: 5 }} />}
    </p>
  ],
  [4, <p>2. Nf3</p>],
  [5, <p>2. Nf3 &emsp; Nf6</p>],
  [
    6,
    <p>
      3. N&thinsp;
      {<Image src={eye} width={15} style={{ marginBottom: 5 }} />}
    </p>
  ],
  [7, <p>3. Ng5 &emsp; Nxe4</p>],
  [8, <p>4. Nxe4</p>],
  [9, ""],
  [10, ""]
]);

const descriptionMap = new Map([
  [
    1,
    "Click through the following gallery for an example from a half-blind game from white's perspective."
  ],
  [2, "Our first move is normal."],
  [
    3,
    "Black's first move is half-blind. We see that the e-pawn was moved, but we don't know where!"
  ],
  [4, "Only after moving do we see where the black pawn was placed."],
  [5, "Black's next move is normal."],
  [
    6,
    "Now we play a half-blind move. The knight could be in 5 places, but black can rule a few out..."
  ],
  [
    7,
    "Black carelessly proceeds with the Petrov, only to realize that we did not take on e5, but played the tricky Ng5."
  ],
  [8, "We walk away with a free knight!"],
  [
    9,
    "Notice: Black could have avoided this mistake by simply attempting 3. ... g5, and realizing that it can't be played."
  ],
  [10, "Want more practice? Play around in Offline Mode!"]
]);

const Gallery = props => {
  const [view, setView] = useState(1);

  const changeView = dir => {
    if (dir === "r") {
      if (view < 10) {
        setView(view + 1);
      }
    } else {
      if (view > 1) {
        setView(view - 1);
      }
    }
  };

  return (
    <Card className="primary" style={{ width: 400 }}>
      <Card.Img variant="top" src={imageMap.get(view)} />
      <Card.Body style={{ minHeight: 175 }}>
        <Card.Text className="white-txt txt-sm" style={{ paddingTop: -10 }}>
          {moveMap.get(view)}
          {view === 10 && (
            <Button
              variant="outline-light"
              className="center-horiz"
              onClick={props.enterGame}
            >
              Play Offline
            </Button>
          )}
        </Card.Text>
        <Card.Text className="grey-txt txt-sm" style={{ marginTop: -10 }}>
          {descriptionMap.get(view)}
        </Card.Text>
        <Button
          variant="outline-light"
          style={{ position: "absolute", bottom: 10, left: 10 }}
          onClick={() => changeView("l")}
        >
          <b>&larr;</b>
        </Button>
        <Button
          variant="outline-light"
          style={{ position: "absolute", bottom: 10, right: 10 }}
          onClick={() => changeView("r")}
        >
          <b>&rarr;</b>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Gallery;
