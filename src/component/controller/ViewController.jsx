import React from "react";
import { InputGroup, Input, Label } from "reactstrap";
const ViewController = ({ view, changeView }) => {
  return (
    <InputGroup>
      <Label for="list-view">
        <Input
          type="radio"
          name="view"
          defaultChecked={view === "list"}
          value="list"
          onChange={(e) => changeView(e.target.value)}
        />
        List View
      </Label>
      <Label for="table-view">
        <Input
          type="radio"
          name="view"
          defaultChecked={view === "table"}
          value="table"
          onChange={(e) => changeView(e.target.value)}
        />
        Table View
      </Label>
    </InputGroup>
  );
};

export default ViewController;
