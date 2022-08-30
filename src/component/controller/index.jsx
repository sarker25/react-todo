import React from "react";
import SearchController from "./SearcController";
import { Row, Col } from "reactstrap";
import FilterController from "./FilterController";
import ViewController from "./ViewController";
import BulkController from "./BulkController";

const Controller = ({
  toggleForm,
  view,
  changeView,
  changeFilter,
  searchTerm,
  clearSelected,
  clearCompleted,
  reset,
}) => {
  return (
    <div className="my-3">
      <SearchController toggleForm={toggleForm} searchTerm={searchTerm} />
      <Row>
        <Col>
          <FilterController changeFilter={changeFilter} />
        </Col>
        <Col>
          <ViewController view={view} changeView={changeView} />
        </Col>
        <Col>
          <BulkController
            clearSelected={clearSelected}
            clearCompleted={clearCompleted}
            reset={reset}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Controller;
