import React from "react";
import { ListGroupItem, Button, Input } from "reactstrap";
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-items-center">
      <Input
        type="checkbox"
        defaultChecked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
      <div style={{ marginLeft: "10px" }}>
        <h4>{todo.text}</h4>
        <p>{todo.time.toDateString()}</p>
      </div>
      <Button
        style={{ marginLeft: "auto" }}
        onClick={() => toggleComplete(todo.id)}
        color={todo.isComplete ? "danger" : "success"}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

export default ListItem;
