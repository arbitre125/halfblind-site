import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function InputMove(props) {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    props.makeMove(value);
    event.preventDefault();
  };

  return (
    <div style={{ width: "20%" }}>
      <InputGroup>
        <FormControl onChange={handleChange} />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleSubmit}>
            Move
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default InputMove;
