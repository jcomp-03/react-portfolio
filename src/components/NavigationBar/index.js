import React, { useState, useEffect } from "react";
// import ContentSection from "../ContentSection";

function NavigationBar(props) {
  const {
    navSections = [],
    currentSection,
    setCurrentSection
  } = props;

  useEffect(() => {
    document.title = currentSection.name;
  }, [currentSection]);

  return (
    <nav className="border d-flex">
      <ul className="list-unstyled align-self-center d-flex my-0">
        {navSections.map((section) => (
          <li
            className={`mx-1 ${
              currentSection.name === section.name && 'navActive'
            }`}
            key={section.name}
          >
            <span
              className="text-decoration-none text-white"
              onClick={() => {
                setCurrentSection(section);
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
