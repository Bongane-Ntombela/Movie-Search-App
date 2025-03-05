const apiKey = '76d079f0'; // Get an API key from http://www.omdbapi.com/apikey.aspx

const movieInput = document.getElementById('movieInput');
const searchButton = document.getElementById('searchButton');
const movieDetails = document.getElementById('movieDetails');
const backToTop = document.getElementById('backToTop');

searchButton.addEventListener('click', () => {
    const movieName = movieInput.value.trim();

    if (movieName !== '') {
        fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response === 'True') {
                    movieDetails.innerHTML = `
                        <div class="float-container">
                            <div class="float-child">
                                <img src="${data.Poster}" alt="${data.Title} poster">
                            </div>
                            <div class="float-child">
                                <h2>${data.Title}</h2>
                                <p><strong>Year:</strong> ${data.Year}</p>
                                <p><strong>Director:</strong> ${data.Director}</p>
                                <p><strong>Genre:</strong> ${data.Genre}</p>
                                <p><strong>Actors:</strong> ${data.Actors}</p>
                                <p><strong>Plot:</strong> ${data.Plot}</p>
                                <a href="https://www.imdb.com/title/${data.imdbID}" target="_blank">
                                    <button>Watch on OMDB</button>
                                </a>
                            </div>
                        </div>
                    `;

                    // Show Back to Top button
                    backToTop.style.display = 'block';
                } else {
                    movieDetails.innerHTML = '<p>Movie not found.</p>';
                    backToTop.style.display = 'none';
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                movieDetails.innerHTML = '<p>An error occurred while fetching data.</p>';
                backToTop.style.display = 'none';
            });
    }
});

// Scroll back to the top when the button is clicked
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
