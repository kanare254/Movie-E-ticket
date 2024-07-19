# Flatdango Movie Theatre- E_Ticket Application
I've developed Flatdango, a straightforward web application enabling users to browse a movie list, view detailed movie information, and simulate ticket purchases. Below is an overview of how to set up and run this application.
Flatdango utilizes HTML, CSS, and JavaScript to fetch movie data from an API endpoint. It dynamically populates a movie list and updates movie details in real-time as users interact with the application. The UI adjusts to reflect ticket availability and sold-out status when simulating ticket purchases.


Files:
index.html: Defines the HTML structure of the application.
styles.css: Stylesheet for layout and component styling.
script.js: JavaScript file managing data fetching, rendering, and user interactions.

Functions:
The 'fetchMovies' function now uses 'fetch('db.json')' to fetch data from the local '.json' file.
'response.json()' parses the JSON response into a JavaScript object.
Adjustments in 'displayMovies', 'showMovieDetails', and other functions ensure they handle the data structure fetched from the '.json' file correctly.

Features:
Displays a dynamically populated list of movies fetched from an API.
Provides detailed information about each movie.
Simulates ticket purchases with real-time updates on ticket availability.
Responsive design using CSS Flexbox ensures an organized and user-friendly interface.

Future Enhancements may include:
Implementing user authentication and ticket reservation capabilities.
Adding search and filter functionalities for movies.
Enhancing UI/UX with animations and transitions.
Optimizing performance and accessibility for a seamless user experience.
