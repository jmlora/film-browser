import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilm } from "../../api/films";
import { FilmInfo } from "../../components/FilmInfo/FilmInfo";

function FilmDetails({ id }) {
  const { filmid } = useParams();
  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    getFilm(filmid).then((resp) => setFilmData(resp));
  }, [filmid]);

  return <div>{filmData && <FilmInfo info={filmData} />}</div>;
}

export { FilmDetails };
