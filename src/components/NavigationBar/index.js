import React, { useState, useEffect } from "react";
// import ContentSection from "../ContentSection";

function NavigationBar(props) {
  const {
    navSections = [],
    currentSection,
    setCurrentSection,
    sectionActive,
    setSectionActive
  } = props;

  useEffect(() => {
    document.title = currentSection.name;
  }, [currentSection]);

  return (
    <nav className="d-flex">
      <ul className="list-unstyled align-self-center d-flex my-0">
        {navSections.map((section) => (
          <li
            className={`mx-1 ${currentSection.name === section.name && sectionActive && 'navActive'}`}
            key={section.name}
          >
            <span
              className="text-decoration-none text-white"
              onClick={() => {
                setCurrentSection(section);
                setSectionActive(true);
                console.log(`${section.name} clicked!`);
              }}
            >
              {section.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
