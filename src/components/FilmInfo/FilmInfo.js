import React from "react";
import styles from "./FilmInfo.module.scss";
import { Tag } from "../Tag/Tag";
import { Review } from "../Review/Review";
import { LinkButton } from "../LinkButton/LinkButton";

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
          {info.image && <img alt={info.name} src={info.image.original} />}
          {!info.image && (
            <img
              src="https://via.placeholder.com/250x350?text=No+image"
              alt={`${info.name}`}
            />
          )}
        </div>
        <div className={styles.info}>
          {info.summary && <p>{info.summary.replace(/(<([^>]+)>)/gi, "")}</p>}
          {!info.summary && <p>No description provided</p>}
          <div>
            <Review rating={info.rating.average} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <LinkButton to="/">VOLVER</LinkButton>
      </div>
    </div>
  );
}

export { FilmInfo };
