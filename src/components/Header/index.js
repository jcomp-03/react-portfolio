import React from "react";
import NavigationBar from "../NavigationBar";

function Header(props) {
  const { navSections = [], currentSection, setCurrentSection } = props;

  return (
    <header className="d-flex justify-content-between" id="header">
      <h1>James Compagnoni</h1>
      <NavigationBar
        navSections={navSections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </header>
  );
}

export default Header;
