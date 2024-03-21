import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Pagination.css";
function Pagination() {
  return (
    <div className="pagination ">
      <div className="next flex-row">
        <p>next</p>
        <FontAwesomeIcon icon={faChevronRight} className="chevron" />
      </div>
      <div className="page-size flex-row">
        <p>page: 1</p>
        <p>size: 2 </p>
      </div>
    </div>
  );
}

export default Pagination;
