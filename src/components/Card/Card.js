import React from "react";
import styles from "./Card.module.scss";

function Card({ thumbnail, title, description }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={thumbnail} alt={`${title} film thumbnail`} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export { Card };
