/* eslint-disable no-multi-str */
import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [works] = useState([
    {
      title: "IMBD Movie Search Platform",
      description:
        "Mobile-responsive movie search platform utilizing The Movie Database\
             (TMDB) API for querying information about movies and displaying the search results.",
      technologiesUsed: [
        "Fetch API",
        "Bulma CSS Framework",
        "TMDB server-side API",
        "Browser local storage",
      ],
      imageName: "imbd.JPG",
      githubUrlPath: "https://github.com/jcomp-03/IMBD",
      deployedAppUrlPath:
        "https://jcomp-03.github.io/Project-1-RWD-Movie-Search-Platform/",
    },
    {
      title: "Ouiii Party",
      description:
        "Like to party? Checkout this site for hosting parties or finding one nearby",
      technologiesUsed: [
        "Node.js",
        "Express.js",
        "Sequelize",
        "Heroku",
        "MySQL",
        "Bulma",
      ],
      imageName: "party-app.JPG",
      githubUrlPath: "https://github.com/jcomp-03/OUiii",
      deployedAppUrlPath: "https://ouiii-party.herokuapp.com/%E2%80%8B.git",
    },
    {
      title: "Weather Dashboard",
      description:
        "Mobile-responsive weather app which shows current city weather and 5-day forecast",
      technologiesUsed: [
        "Fetch API",
        "Dynamic HTML markup creation",
        "Bootstrap",
      ],
      imageName: "weather-dashboard.JPG",
      githubUrlPath: "https://github.com/jcomp-03/weather-dashboard",
      deployedAppUrlPath: "https://jcomp-03.github.io/weather-dashboard/",
    },
    {
      title: "Team Profile Generator",
      description:
        "Display the makeup of a team of managers, engineers, and interns.",
      technologiesUsed: [
        "OOP",
        "modern ES6 class syntax",
        "Jest unit testing",
        "Dynamic HTML markup creation via template literals",
      ],
      imageName: "team-profile-generator.JPG",
      githubUrlPath: "https://github.com/jcomp-03/team-profile-generator",
      deployedAppUrlPath: "",
    },
    {
      title: "Eagle Fitness",
      description:
        "Get in shape, schedule your workouts, plan your meals!",
      technologiesUsed: [
        "React.js",
        "modern ES6 class syntax",
        "GraphQL API",
        "Node.js/Express.js back-end server",
      ],
      imageName: "eagle-fitness.png",
      githubUrlPath: "https://github.com/jcomp-03/eagle-fitness",
      deployedAppUrlPath: "https://jlcomp-03-eagle-fitness.herokuapp.com/",
    }
    
  ]);

  return (
    <section className="row">
      <h2 className="text-center text-dark mb-4">A selection of my recent projects</h2>
      {works.map((work) => (
        <Project work={work} key={work.title} />
      ))}
    </section>
  );
}

export default Portfolio;
