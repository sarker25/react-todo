import React from "react";
import { ListGroup } from "reactstrap";
import ListItem from "./ListItem";
const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
        />
      ))}
    </ListGroup>
  );
};

export default ListView;
