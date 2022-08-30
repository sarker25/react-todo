import React, { useState } from "react";
import { Button, Input } from "reactstrap";
const init = { text: "", description: "" };
const CreateForm = ({ createTodo }) => {
  const [value, setvalue] = useState({ ...init });
  const changehandler = (e) => {
    setvalue({
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    createTodo(value);
    setvalue("");
  };
  return (
    <div>
      <Input
        name="text"
        placeholder="Enter Your Task"
        value={value.text}
        onChange={changehandler}
        className="my-2"
      />

      <Button color="success" onClick={submitHandler}>
        Create
      </Button>
    </div>
  );
};

export default CreateForm;
