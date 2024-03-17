import React from "react";
import "./Appbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Appbar() {
  return (
    <div className="app_bar">
      <span>Dashboard</span>
      <div className="search-content">
        <input
          type="search"
          name="search"
          id="search"
          className="search"
          placeholder="search something here ..."
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="user-info">
        <div className="avatar">
          <img src="" alt="" />
        </div>
        <div className="info">
          <h4>John Doe</h4>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
