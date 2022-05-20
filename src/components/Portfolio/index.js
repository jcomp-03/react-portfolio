/* eslint-disable no-multi-str */
import React, { useState } from 'react';
import PortfolioWork from '../PortfolioWork';

function Portfolio() {
    const [works] = useState([
        {
            title: "IMBD Movie Search Platform",
            description: "Mobile-responsive movie search platform utilizing The Movie Database\
             (TMDB) API for querying information about movies and displaying the search results.",
            technologiesUsed: [ 'Fetch API', 'Bulma CSS Framework', 'TMDB server-side API', 'Browser local storage'],
            imageUrlPath: "../../../assets/images/imbd.JPG",
            githubUrlPath: "https://github.com/jcomp-03/IMBD",
            deployedAppUrlPath: "https://jcomp-03.github.io/Project-1-RWD-Movie-Search-Platform/"
        },
        {
            title: "Ouiii Party",
            description: "Like to party? Checkout this site for hosting parties or finding one nearby",
            technologiesUsed: [ 'Node.js', 'Express.js', 'Sequelize', 'Heroku', 'MySQL', 'Bulma'],
            imageUrlPath:"../../../assets/images/party-app.JPG",
            githubUrlPath: "https://github.com/jcomp-03/OUiii",
            deployedAppUrlPath: "https://ouiii-party.herokuapp.com/%E2%80%8B.git"
        },
        {
            title: "Weather Dashboard",
            description: "Mobile-responsive weather app which shows current city weather and 5-day forecast",
            technologiesUsed: [ 'Fetch API', 'Dynamic HTML markup creation', 'Bootstrap'],
            imageUrlPath:"../../../assets/images/weather-dashboard.JPG",
            githubUrlPath: "https://github.com/jcomp-03/weather-dashboard",
            deployedAppUrlPath: "https://jcomp-03.github.io/weather-dashboard/"
        },
        {
            title: "Team Profile Generator",
            description: "Mobile-responsive movie search platform utilizing The Movie Database\
             (TMDB) API for querying information about movies and displaying the search results.",
            technologiesUsed: [ 'OOP', 'modern ES6 class syntax', 'Jest unit testing', 'Dynamic HTML markup creation via template literals'],
            imageUrlPath:"../../../assets/images/team-profile-generator.JPG",
            githubUrlPath: "https://github.com/jcomp-03/team-profile-generator",
            deployedAppUrlPath: ""
        }
    ])

  return (
    <section>
        {
            works.map((work) => (
                <PortfolioWork work={work} key={work.title} />
            ))
        }
    </section>
  );
}
export default Portfolio;