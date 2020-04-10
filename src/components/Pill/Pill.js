import React from "react";
import { Link } from "gatsby";
import styles from "./Pill.module.css";

export default function({ tag, className }) {
  return (
    <div className={`${styles.pill} ${className}`}>
      <Link to={`/tags/${tag}`}>
        <span className={styles.tagLabel}>#{tag}</span>
      </Link>
    </div>
  );
}
