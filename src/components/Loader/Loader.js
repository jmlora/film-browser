import React from "react";
import styles from "./Loader.module.scss";

function Loader() {
  return <span id="loader" className={styles.loader}></span>;
}

export { Loader };
