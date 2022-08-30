import React from "react";
import { Button, ButtonGroup } from "reactstrap";
const FilterController = ({ changeFilter }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => changeFilter("all")}>ALL</Button>
      <Button onClick={() => changeFilter("complete")}>Complete</Button>
      <Button onClick={() => changeFilter("incomplete")}>Incomplete</Button>
    </ButtonGroup>
  );
};

export default FilterController;
