import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function InputMove(props) {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.makeMove(value);
    setValue("");
  };

  return (
    <InputGroup style={{ width: 150 }}>
      <FormControl
        className="no-outline"
        onChange={handleChange}
        value={value}
      />
      <InputGroup.Append>
        <Button variant="outline-light" onClick={handleSubmit}>
          Move
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default InputMove;
