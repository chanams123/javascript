const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')
const results = document.getElementById('results')

searchBtn.addEventListener('click', async function() {
    const query = searchInput.value;
    if (query) {
        const response = await fetch(
            `https://www.omdbapi.com/?s=${query}&apikey=da22de3a`
        );
        const data = await response.json();
        if (data.Search) {
            results.innerHTML = "";
            data.Search.forEach(function(movie) {
                results.innerHTML +=
                `<div>
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>`;
            });
        } else {
            results.innerHTML = "<p>No results found.</p>";
        }
    }
    let moviesAlphabetically = ['A-Z']
    let searchBtn= []
    for (let i = a; i<z; ++i)
});
