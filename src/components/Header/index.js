import React from "react";
import NavigationBar from "../NavigationBar";

function Header() {
  return (
    <div className="border border-danger border-3 d-flex justify-content-between">
      <h1>James Compagnoni</h1>
      <NavigationBar />
    </div>
  );
}

export default Header;
