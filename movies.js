let movies = [];

async function getMovies(filter) {
    try {
        const response = await fetch('https://www.omdbapi.com/?apikey=34a5c5d4&s=fast');
        const data = await response.json();
        let moviesList = data.Search || [];

        if (filter === 'NEW_TO_OLD') {
            moviesList.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
        } else if (filter === 'OLD_TO_NEW') {
            moviesList.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
        }

        return moviesList;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}

async function renderMovies(filter) {
    try {
        movies = await getMovies(filter);

        const moviesHtml = movies
            .map((movie) => {
                return `<div class="movies">
                    <figure class="movies__img--wrapper">
                        <img class="movies__img" src="${movie.Poster}" alt="">
                    </figure>
                    <div class="movie__title">
                        ${movie.Title}
                    </div>
                    <div class="movie__year">
                        ${movie.Year}
                    </div>
                    <div class="movie__imdbID">
                        ${movie.imdbID}
                    </div>
                </div>`;
            })
            .join("");

        const moviesListEl = document.querySelector(".movie-list");

        if (moviesListEl) {
            if (movies.length > 0) {
                moviesListEl.innerHTML = moviesHtml;
            } else {
                moviesListEl.innerHTML = "<p>No movies found</p>";
            }
        }
    } catch (error) {
        console.error('Error rendering movies:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMovies(); // Call the function without a filter initially to load movies on page load
});

function filterMovies(event) {
    const selectedFilter = event.target.value;
    renderMovies(selectedFilter);
}