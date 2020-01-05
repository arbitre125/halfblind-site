import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function InputMove(props) {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    props.makeMove(value);
    setValue("");
    event.preventDefault();
  };

  return (
    <div className="center" style={{ width: "15%", marginTop: 20 }}>
      <InputGroup>
        <FormControl onChange={handleChange} value={value} />
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
