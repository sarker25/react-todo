import React from "react";
import { Table } from "reactstrap";
import TableItem from "./TableItem";

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Todos</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TableItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            toggleSelect={toggleSelect}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default TableView;
