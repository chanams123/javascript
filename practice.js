const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')
const results = document.getElementById('results')
const filter = document.getElementById('filter');

searchBtn.addEventListener('click', async function() {
    const query = searchInput.value;
    if (query) {
        const response = await fetch(
            `https://www.omdbapi.com/?s=${query}&apikey=da22de3a`
        );
        const data = await response.json();
        if (data.Search) {
            const movies = data.Search;
            const filterValue = filter.value;
            if (filterValue === 'az') {
                movies.sort((a, b) => a.Title.localeCompare(b.Title));
            } else if (filterValue === 'za') {
                movies.sort((a, b) => b.Title.localeCompare(a.Title));
            }
            results.innerHTML = "";
            movies.forEach(function(movie) {
                results.innerHTML +=
                `<div>
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
                <img src="${movie.Poster}" alt ="${movie.Title}"> 
                </div>`;
                });
            } else {
                results.innerHTML = "<p>No results found.</p>";
            }
        }
        
    });