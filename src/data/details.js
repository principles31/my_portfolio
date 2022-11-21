const liveVersionLink = {
    'link-text': 'See Live',
    'link-icon': './assets/icons/see_live.svg',
  };
  
  const sourceLink = {
    'link-text': 'See Source',
    'link-icon': './assets/icons/Icon_GitHub.svg',
  };
  
  const projectDetails = [
    {
      id: 1,
      name: 'Covid-19 Statistics',
      description: `A responsive web app that displays COVID-19 statistics from different 
                    countries by fetching data from Covid-19 API.`,
      image: 'Covid-19 Statistics',
      technologies: ['JavaScript', 'React', 'Redux', 'CSS', 'HTML'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://62c5632ff95425005628e693--singular-narwhal-45fe91.netlify.app/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/principles31/Covid_19_Statistics' },
    },
    {
      id: 2,
      name: 'leaderboard',
      description: `A website for adding and removing the scores using ES6 modules Api and webpak.`,
      image: 'leaderboard',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      'live-version-link': { ...liveVersionLink, 'link-href': ' https://principles31.github.io/LeaderBoard/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/principles31/LeaderBoard' },
  
    },
    {
      id: 3,
      name: 'Bookstore App',
      description: `This application contains a list of books with their completion stages. That is,
                    the percentage of the number of pages read to the total number of pages of the book.`,
      image: 'bookstore',
      technologies: ['React', 'Redux', 'CSS'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://principles31.github.io/Book_Store/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/principles31/Book_Store' },
    },
    {
      id: 4,
      name: 'To Do List',
      description: 'A mobile view website that keeps track of activities to perform during the'
                    + 'day and checks and deletes completed activities.',
      image: './assets/images/react-todo.png',
      technologies: ['HTML', 'CSS', 'React'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://achilles-dev.github.io/react-todo-app/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/react-todo-app/' },
    },
    {
      id: 5,
      name: 'Math Magicians App',
      description: `Math magicians" is a website for all fans of mathematics. 
                    It is a Single Page App (SPA) that allows users to:
                    - make simple calculations and
                    - read a random math-related quote.`,
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['React', 'CSS'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://joyful-dolphin-85efd9.netlify.app/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/math-magicians-app' },
    },
    {
      id: 6,
      name: 'JavaScript_Capstone_project',
      description: `it is a movie website which fetches movies from TVmaze API and displays them,
                    where we used Microverse involvement API for adding likes, 
                    comments and reservations.`,
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://principles31.github.io/Javascript_Capstone_Project/dist/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/principles31/Javascript_Capstone_Project' },
    },
  ];
  
  export default projectDetails;
  