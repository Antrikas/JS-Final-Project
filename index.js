
//https://www.omdbapi.com/?apikey=34a5c5d4&s=fast



async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=34a5c5d4&s=fast")
    const moviesData = await movies.json()
   const moviesListEl = document.querySelector(".movie-list") 

   moviesListEl.innerHTML = moviesData.map((movie) => moviesHTML(movie)).join("")
    
}

main()

function showMoviePost(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/movies.html`;
}

function movieHTML(movie) {
    return `<div class="movie" onclick="showMoviePost('${movie.imdbID}')">
        <div class="movie__container">
            <h3>${movie.Title}</h3>
            <p><b>Title:</b> ${movie.Title}</p>
            <p><b>Year:</b> ${movie.Year}</p>
            <p><b>ImdbID:</b> <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
            ${movie.imdbID}
            </a></p>
            <p><b>Type:</b> ${movie.Type}</p>
            <p><b>Poster:</b> <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}" alt="${movie.Title}"></p>
        </div>
    </div>`;
}