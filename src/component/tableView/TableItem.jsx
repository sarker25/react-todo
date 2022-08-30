import React from "react";
import { Button, Input } from "reactstrap";
const TableItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <tr>
      <td>
        <Input
          type="checkbox"
          defaultChecked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
      </td>
      <td>
        <h4>{todo.text}</h4>
        <p>{todo.time.toDateString()}</p>
      </td>
      <td style={{ marginLeft: "auto" }}>
        <Button
          onClick={() => toggleComplete(todo.id)}
          color={todo.isComplete ? "danger" : "success"}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </td>
    </tr>
  );
};

export default TableItem;
