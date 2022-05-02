function searchFilms() {
  return fetch("https://api.tvmaze.com/search/shows?q=girls")
    .then((resp) => resp.json())
    .catch((e) => e.getMessage());
}

function getFilm(filmId) {
  return fetch(`https://api.tvmaze.com/shows/${filmId}`)
    .then((resp) => resp.json())
    .catch((e) => e.getMessage());
}

export { searchFilms, getFilm };
