import React from "react";
import styles from "./CardList.module.scss";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";

function CardList({ filmData, isLoading }) {
  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={styles.isLoading}>
          <Loader />
        </div>
      )}
      {!isLoading && filmData?.length === 0 && (
        <div className={styles.noData}>No data found</div>
      )}
      {!isLoading &&
        filmData?.length > 0 &&
        filmData.map((film) => (
          <div
            className={styles.cardContainer}
            id={`film-${film.show.id}`}
            key={film.show.id}
          >
            <Card {...film.show} />
          </div>
        ))}
    </div>
  );
}

export { CardList };
