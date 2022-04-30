import React from "react";
import styles from "./CardList.module.scss";
import { Card } from "../Card/Card";

function CardList({ filmdata }) {
  return (
    <div className={styles.wrapper}>
      {filmdata.map((film) => (
        <div className={styles.cardContainer}>
          <Card {...film} />
        </div>
      ))}
    </div>
  );
}

export { CardList };
