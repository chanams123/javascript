const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const filter = document.getElementById("filter");
let allMovies = null;

searchBtn.addEventListener("click", async function () {
  const query = searchInput.value;
  if (query) {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=da22de3a`,
    );
    const data = await response.json();
    if (data.Search) {
      allMovies = data.Search;
    } else {
      allMovies = [];
    }
    results.innerHTML = "";
    displayMovies(allMovies);
  } else {
    results.innerHTML = "<p>No results found.</p>";
  }
});

function sortMovies(event) {
  const filterValue = event.target.value;
  let filteredMovies = [];

  if (filterValue === "a-z") {
    filteredMovies = allMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (filterValue === "z-a") {
    filteredMovies = allMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  }

  displayMovies(filteredMovies);
}

function displayMovies(movies) {
  results.innerHTML = "";

  movies.forEach(function (movie) {
    results.innerHTML += `<div class="movie">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
                <img src="${movie.Poster}" alt ="${movie.Title}"> 
                </div>`;
  });
}