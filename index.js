
//https://www.omdbapi.com/?apikey=34a5c5d4&s=fast

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=34a5c5d4&s=fast")
    const moviesData = await movies.json()
   const moviesListEl = document.querySelector(".movie-list") 

   moviesListEl.innerHTML = moviesData.map((movie) => moviesHTML(movie)).join("")
    
}

main()

function showMoveiPost(id){
    localStorage.setItem("id", id)
window.location.href = `${window.location.origin}/movies.html`
}

function userHTML (movie) {
    return `<div class="movies" onlick="showMoviePost(${movie.id})>
    <div class="feature__container">
      <h3>${user.name}</h4>
        <p><b>Title:</b> ${movie.title}</p>
        <p><b>Year:</b> ${movie.year}</p>
        <p><b>ImdbID:</b> <a href="https://${movie.imdbId}" target="_blank">
        ${movie.website}
        <p><b>Type:</b> ${movie.type}</p>
        <p><b>Poster:</b> ${movie.poster}</p>
        </a></p>
    </div>
    </div>`
}