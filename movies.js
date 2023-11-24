 let movies;

 async function renderMovies(filter) {
    const moviesWrapper = document.querySelector(".movies")

    moviesWrapper.classList += ' movies__loading'

    if (!movies) {
        movies = await getMovies ();
    }
 }

 moviesWrapper.classList.remove('movies__loading')

 if (filter === 'NEW_TO_OLD') {
 movies.sort((a, b) => (a.year - b.year));
 }
 else if(filter === 'OLD_TO_NEW'){
 movies.sort((a, b) => (b.year - a.year));
}

 const moviesHtml = movies
 .map((book) => {
  return`<div class="movies">
   <figure class="movies__img--wrapper">
     <img class="movies__img" src="${movies.poster}" alt="">
   </figure>
   <div class="movie__title">
     ${movie.title}
   </div>
   <div class="movie__year">
    ${yearHTML(movie.year)}
   </div>
   <div class="movie__imdbID">
    ${idHTML(movie.imdbID)}
   </div>
 </div>`;
 })
 .join("");

 moviesWrapper.innerHTML = moviesHtml;




function filterMovies(event){
 renderMovies (event.target.value);

}

setTimeout(()=> {
 renderMovies();
});





//FAKE DATA
 function getMovies() {
    return new Promise((resolve) => {
      setTimeout (()=> {
        resolve ([
 {
    "Title": "Fast & Furious 6",
    "Year": "2013",
    "imdbID": "tt1905041",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
    },
    {
    "Title": "The Fast and the Furious",
    "Year": "2001",
    "imdbID": "tt0232500",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
    "Title": "Fast Five",
    "Year": "2011",
    "imdbID": "tt1596343",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
    },
    {
    "Title": "Fast & Furious",
    "Year": "2009",
    "imdbID": "tt1013752",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
    "Title": "The Fast and the Furious: Tokyo Drift",
    "Year": "2006",
    "imdbID": "tt0463985",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
    },
    {
    "Title": "2 Fast 2 Furious",
    "Year": "2003",
    "imdbID": "tt0322259",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
    "Title": "Fast & Furious Presents: Hobbs & Shaw",
    "Year": "2019",
    "imdbID": "tt6806448",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
    },
    {
    "Title": "F9: The Fast Saga",
    "Year": "2021",
    "imdbID": "tt5433138",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"
    },
    {
    "Title": "Fast Times at Ridgemont High",
    "Year": "1982",
    "imdbID": "tt0083929",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzBlZjE1MDctYjZmZC00ZTJmLWFkOWEtYjdmZDZkODBkZmI2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
    },
    {
    "Title": "Fast X",
    "Year": "2023",
    "imdbID": "tt5433140",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
    },
    ]);
},1000);
    });
}
    