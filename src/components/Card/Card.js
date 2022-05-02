import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

function Card({ id, name, image, summary }) {
  return (
    <Link to={`film/${id}`} className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        {image && <img src={image.medium} alt={`${name} thumbnail`} />}
        {!image && (
          <img
            src="https://via.placeholder.com/250x350?text=No+image"
            alt={`${name} thumbnail`}
          />
        )}
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.description}>
        <p>{summary?.replace(/(<([^>]+)>)/gi, "")}</p>
      </div>
    </Link>
  );
}

export { Card };
