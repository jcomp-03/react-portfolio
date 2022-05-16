import React from "react";

function NavigationBar() {
  const navSections = [
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ];

  function navSectionHandler(name) {
    console.log(`${name} clicked!`);
  }

  return (
    <nav className="border">
      <ul className="list-unstyled d-flex">
        {navSections.map((section) => (
          <li className="mx-1" key={section.name}>
            <span
              href="#about"
              className="text-decoration-none text-white"
              onClick={() => navSectionHandler(section.name)}
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
