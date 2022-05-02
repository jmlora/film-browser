import React from "react";
import styles from "./FilmInfo.module.scss";
import { Link } from "react-router-dom";
import { Tag } from "../Tag/Tag";
import { Review } from "../Review/Review";

function FilmInfo({ info }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>{info.name}</h1>
        <div className={styles.genres}>
          {info.genres.map((genre, index) => (
            <Tag key={index} tag={genre} />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img alt={info.name} src={info.image?.original} />
        </div>
        <div className={styles.info}>
          <p>{info.summary?.replace(/(<([^>]+)>)/gi, "")}</p>
          <div>
            <Review rating={info.rating.average} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}

export { FilmInfo };
