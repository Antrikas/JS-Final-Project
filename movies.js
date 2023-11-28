let movies = []; 

async function getMovies() {
    try {
        const response = await fetch('https://www.omdbapi.com/?apikey=34a5c5d4&s=fast');
        const data = await response.json();
        let movies = data.Search || [];

        if (filter === 'NEW_TO_OLD') {
            movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
        } else if (filter === 'OLD_TO_NEW') {
            movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
        }

        return movies;
    } catch (error) {
        throw new Error('Error fetching movies:', error);
    }
}
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

  


function filterMovies(event) {
    getMovies(event.target.value);
}

async function getMovies() {
    
    try {
        const response = await fetch("https://www.omdbapi.com/?apikey=34a5c5d4&s=fast");
        const data = await response.json();
        return data.Search || [];
    } catch (error) {
        console.error("Error fetching movies:", error);
        return []; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getMovies(); 
});