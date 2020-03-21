import React from 'react';
import { Link } from 'gatsby';
import styles from './Pill.module.css';

export default function ({ tags }) {

  function renderPills() {
    return tags.map((tag, idx) => {
      return (
        <Link
          to={`/tags/${tag}`}
          key={`pill-${tag}-${idx}`}
          className={styles.pill}
        >
          <span className={styles.tagLabel}>#{tag}</span>
        </Link>
      );
    })
  }
  return (
    <div className={styles.pillContainer}>
      {renderPills(tags)}
    </div>
  );
}