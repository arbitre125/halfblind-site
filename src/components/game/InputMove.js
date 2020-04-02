import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function InputMove(props) {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.makeMove(props.id, value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup style={{ width: 150 }}>
        <FormControl
          className="no-outline"
          style={{ fontSize: 16 }}
          onChange={handleChange}
          value={value}
        />
        <InputGroup.Append>
          <Button variant="outline-light" type="submit">
            Move
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  );
}

export default InputMove;
