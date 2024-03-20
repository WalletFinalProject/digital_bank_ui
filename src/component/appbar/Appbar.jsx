import React from "react";
import "./Appbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
function Appbar() {
  return (
    <div className="app_bar">
      <div className="component_name">
        <FontAwesomeIcon icon={faBars} className="bars" />
        <span>Dashboard</span>
      </div>
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
