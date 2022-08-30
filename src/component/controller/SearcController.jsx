import React from "react";
import { Input, Button } from "reactstrap";
const SearchController = ({ toggleForm, searchTerm }) => {
  return (
    <div className="d-flex my-4">
      <Input
        placeholder="Enter your search"
        type="search"
        style={{ marginRight: "5px" }}
        onChange={(e) => searchTerm(e.target.value)}
      />

      <Button color="success" onClick={toggleForm}>
        New
      </Button>
    </div>
  );
};

export default SearchController;
