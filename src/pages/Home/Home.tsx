import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import { CardList } from "../../components/CardList/CardList";
import { searchFilms } from "../../api/films";

function Home() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    searchFilms().then((data) => {
      setApiData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.home}>
      <h1>Film list</h1>
      <CardList filmData={apiData} isLoading={isLoading} />
    </div>
  );
}

export { Home };
