import React from "react";
import NavigationBar from "../NavigationBar";

function Header(props) {
  const { 
    navSections = [], 
    currentSection, 
    setCurrentSection, 
    sectionActive,
    setSectionActive
  } = props;

  return (
    <header className="d-flex justify-content-between" id="header">
      <h1>James Compagnoni</h1>
      <NavigationBar
        navSections={navSections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        sectionActive={sectionActive}
        setSectionActive={setSectionActive}
      />
    </header>
  );
}

export default Header;
