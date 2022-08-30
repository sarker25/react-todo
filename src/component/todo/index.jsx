import React, { useState } from "react";
import nextId from "react-id-generator";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Controller from "../controller";
import CreateForm from "../creteForm";
import ListView from "../ListView";
import TableView from "../tableView";

const init = {
  todos: [
    {
      id: "fasdsdaf",
      text: "test",
      isComplete: false,
      isSelect: false,
      time: new Date(),
    },
  ],
  isFormOpen: false,
  view: "list",
  filter: "all",
  searchValue: "",
};

const Todo = () => {
  const [state, setState] = useState({ ...init });
  const toggleComplete = (todoId) => {
    setState((prev) => {
      return {
        ...prev,
        todos: state.todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              isComplete: !todo.isComplete,
            };
          } else {
            return { ...todo };
          }
        }),
      };
    });
  };
  const toggleSelect = (todoId) => {
    setState((prev) => {
      return {
        ...prev,
        todos: state.todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              isSelect: !todo.isSelect,
            };
          } else {
            return { ...todo };
          }
        }),
      };
    });
  };
  const createTodo = (todo) => {
    setState((prev) => {
      const newTodo = {
        ...todo,
        id: nextId(),
        isComplete: false,
        isSelect: false,
        time: new Date(),
      };

      return {
        ...prev,
        todos: [newTodo, ...state.todos],
        isFormOpen: false,
      };
    });
  };
  const toggleForm = () => {
    setState((prev) => {
      return {
        ...prev,
        isFormOpen: !state.isFormOpen,
      };
    });
  };
  const changeView = (value) => {
    setState((prev) => {
      return {
        ...prev,
        view: value,
      };
    });
  };

  const changeFilter = (value) => {
    setState((prev) => {
      return {
        ...prev,
        filter: value,
      };
    });
  };
  const searchTerm = (value) => {
    setState((prev) => {
      return {
        ...prev,
        searchValue: value.toLowerCase(),
      };
    });
  };
  const performSearch = () => {
    if (state.searchValue) {
      const searchTodo = [...state.todos].filter((todo) =>
        todo.text.toLocaleLowerCase().includes(state.searchValue)
      );
      return [...searchTodo];
    } else {
      return [...state.todos];
    }
  };
  const performFilter = (todos) => {
    if (state.filter === "complete") {
      const filterTodo = [...todos].filter((todo) => todo.isComplete);
      return [...filterTodo];
    } else if (state.filter === "incomplete") {
      const filterTodo = [...todos].filter((todo) => !todo.isComplete);
      return [...filterTodo];
    } else {
      return [...todos];
    }
  };
  const getView = () => {
    let todos = performSearch();
    todos = performFilter(todos);
    if (state.view === "list") {
      return (
        <ListView
          todos={todos}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
        />
      );
    } else {
      return (
        <TableView
          todos={todos}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
        />
      );
    }
  };
  const clearSelected = () => {
    setState((prev) => {
      return {
        ...prev,
        todos: [...state.todos].filter((todo) => !todo.isSelect),
      };
    });
  };
  const clearCompleted = () => {
    setState((prev) => {
      return {
        ...prev,
        todos: [...state.todos].filter((todo) => !todo.isComplete),
      };
    });
  };
  const reset = () => {
    setState((prev) => {
      return {
        ...prev,
        isFormOpen: false,
        view: "list",
        filter: "all",
        searchValue: "",
      };
    });
  };
  return (
    <div>
      <h1 className="display-4 text-center my-5">My Todo</h1>
      <Controller
        toggleForm={toggleForm}
        view={state.view}
        changeView={changeView}
        changeFilter={changeFilter}
        searchTerm={searchTerm}
        clearSelected={clearSelected}
        clearCompleted={clearCompleted}
        reset={reset}
      />
      {getView()}
      <Modal isOpen={state.isFormOpen}>
        <ModalHeader toggle={toggleForm}>Create A Task</ModalHeader>
        <ModalBody>
          <CreateForm createTodo={createTodo} />
        </ModalBody>
      </Modal>
      {/* {console.log(performSearch())} */}
    </div>
  );
};

export default Todo;
