import React from 'react';
import { Link } from 'gatsby';
import styles from './BlogCard.module.css';

export default function ({ title, description, date, author, slug }) {
  return (
    <div className={styles.cardWrapper}>
      <Link to={`/${slug}`}>
        <div className={styles.postTitle}>
          {title}
        </div>
        <div className={styles.postDate}>{date}</div>
        <div className={styles.postDescription}>{description}</div>
      </Link>
    </div>
  )
}