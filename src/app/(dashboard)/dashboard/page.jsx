import React from "react";
import "./dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="card-content">
        <div className="accounts"></div>
        <div className="currency"></div>
        <div className="transaction"></div>
        <div className="balance"></div>
      </div>
      <div className="side-section"></div>
    </div>
  );
}

export default Dashboard;
