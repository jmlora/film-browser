import React from "react";
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.scss";

function LinkButton({ children, to }) {
  return (
    <Link to={to} className={styles.linkButton}>
      {children}
    </Link>
  );
}

export { LinkButton };
