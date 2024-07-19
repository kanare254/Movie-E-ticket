document.addEventListener('DOMContentLoaded', () => {
    const moviesList = document.getElementById('movies-list');
    const movieDetailsBody = document.getElementById('movie-details-body');
    const buyTicketButton = document.getElementById('buy-ticket');

    let moviesData = [];

    function fetchMovies() {
        return fetch("db.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.films;
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                return [];
            });
    }

    function displayMovies(movies) {
        moviesList.innerHTML = ''; 
        moviesData = movies; 

        movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = movie.title;
            li.addEventListener('click', () => showMovieDetails(movie));
            moviesList.appendChild(li);
        });
    }

    function showMovieDetails(movie) {
        const { id, title, runtime, capacity, showtime, tickets_sold, description, poster } = movie;
        const availableTickets = capacity - tickets_sold;

        movieDetailsBody.innerHTML = `
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td>${runtime}</td>
                <td>${capacity}</td>
                <td>${showtime}</td>
                <td>${tickets_sold}</td>
                <td>${description}</td>
                <td><img src="${poster}" alt="${title} Poster" style="max-width: 120px;"></td>
            </tr>
        `;

        buyTicketButton.disabled = availableTickets === 0;
        buyTicketButton.textContent = availableTickets === 0 ? 'Sold Out' : 'Buy Ticket';

        buyTicketButton.removeEventListener('click', buyTicketHandler);
        buyTicketButton.addEventListener('click', () => buyTicketHandler(movie, availableTickets));
    }

    async function buyTicketHandler(movie, availableTickets) {
        if (availableTickets > 0) {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                movie.tickets_sold++;
                showMovieDetails(movie);
            } catch (error) {
                console.error('Error buying ticket:', error);
            }
        }
    }

    async function init() {
        try {
            const movies = await fetchMovies();
            displayMovies(movies);
            if (movies.length > 0) {
                showMovieDetails(movies[0]);
            }
        } catch (error) {
            console.error('Error initializing:', error);
        }
    }

    init();
});
