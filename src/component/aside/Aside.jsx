import React from "react";
function Aside() {
  return (
    <section
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "15vw",
        height: "100vh",
        background: "blue",
      }}
    >
      <h1>U-bank</h1>
      <div className="link">
        <ul>
          <li>Dashboard</li>
          <li>Accounts</li>
          <li>Currency</li>
          <li>Transaction</li>
          <li>Balance</li>
        </ul>
        <ul>
          <li>Settings</li>
          <li>Log out</li>
        </ul>
      </div>
    </section>
  );
}

export default Aside;
