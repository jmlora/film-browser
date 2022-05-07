import React from "react";
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.scss";

type LinkButtonType = {
  children: any,
  to: string,
}

function LinkButton({ children, to }: LinkButtonType) {
  return (
    <Link to={to} className={styles.linkButton}>
      {children}
    </Link>
  );
}

export { LinkButton };
