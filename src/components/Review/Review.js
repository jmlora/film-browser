import React from "react";
import styles from "./Review.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faStar);

function Review({ rating }) {
  return (
    <div className={styles.review}>
      <FontAwesomeIcon icon={faStar} />
      <span>{rating ? rating : "N/D"}</span>
    </div>
  );
}

export { Review };
