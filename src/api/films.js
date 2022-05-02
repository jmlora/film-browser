function searchFilms() {
  return fetch("https://api.tvmaze.com/search/shows?q=girls").then((resp) =>
    resp.json()
  );
}

function getFilm(filmId) {
  return fetch(`https://api.tvmaze.com/shows/${filmId}`).then((resp) =>
    resp.json()
  );
}

export { searchFilms, getFilm };
