import React from "react";
import { Outlet } from "react-router-dom";

function Company() {
  return (
    <div>
      <h1>book demo layout</h1>
      <Outlet />
    </div>
  );
}

export default Company;
